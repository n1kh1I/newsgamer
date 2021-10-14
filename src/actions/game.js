import firebase from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { content, POINTS_ON_WIN } from "../constants";
import {
  CREATING_GAME,
  CREATING_GAME_SUCCESS,
  CREATING_GAME_FAIL,
  UPDATING_SCORE,
  UPDATING_SCORE_FAIL,
  UPDATING_SCORE_SUCCESS,
  FETCHING_CURRENT_GAME,
} from ".";
import { fetchGames } from "./games";
import { FETCHING_CURRENT_GAME_SUCCESS, RESET_CURRENT_GAME } from "actions";
import { generateLetter } from "helpers";
import { getCurrentDateAndTime } from "helpers";
import { isEqual } from "lodash";

const db = firebase.firestore();

const createGame = (history) => async (dispatch, getState) => {
  const { uid, displayName } = getState().auth.user;

  dispatch({
    type: CREATING_GAME,
  });

  const paraIndex = Math.floor(Math.random() * content.length);
  let letter = generateLetter(paraIndex);
  const id = uuidv4();

  const data = {
    players: { [uid]: { name: displayName, uid, words: [] } },
    createdBy: { uid, name: displayName },
    gameId: id,
    letter: letter,
    paraIndex: paraIndex,
    creationdate: firebase.database.ServerValue.TIMESTAMP,
    createdAt: Date.now(),
    over: false,
    start: false,
  };

  try {
    await db.collection("games").doc(id).set(data);
    dispatch({ type: CREATING_GAME_SUCCESS, payload: data });
    history.push(`/game/${id}`);
  } catch (error) {
    console.error(error);
    dispatch({ type: CREATING_GAME_FAIL, payload: data });
  }
};

const deleteGame = (gameId) => async (dispatch) => {
  try {
    await db.collection("games").doc(gameId).delete();
    dispatch(fetchGames());
  } catch (error) {
    alert("Error in deleting game.");
  }
};

const listenToRealTimeGameChanges = (gameId) => (dispatch, getState) => {
  dispatch({ type: FETCHING_CURRENT_GAME });

  const game_doc = db.collection("games").doc(gameId);

  return game_doc.onSnapshot((doc) => {
    const { game } = getState().game;
    if (!isEqual(doc.data(), game)) {
      dispatch({ type: FETCHING_CURRENT_GAME_SUCCESS, payload: doc.data() });
    } else if (!doc.data()) {
      dispatch({ type: RESET_CURRENT_GAME });
    }
  });
};

const updateScore = (words) => async (dispatch, getState) => {
  dispatch({ type: UPDATING_SCORE });

  const { game } = getState().game;
  const game_doc = db.collection("games").doc(game.gameId);
  const { uid } = getState().auth.user;

  try {
    await game_doc.update({ [`players.${uid}.words`]: words });
    dispatch({
      type: UPDATING_SCORE_SUCCESS,
    });
  } catch (error) {
    console.error(error);

    dispatch({ type: UPDATING_SCORE_FAIL });
  }
};

const addNewPlayerToCurrGame = (gameId) => async (dispatch, getState) => {
  const game_doc = db.collection("games").doc(gameId);
  const { uid, displayName } = await getState().auth.user;

  await game_doc.update({
    [`players.${uid}`]: { name: displayName, uid, words: [] },
  });
};

const gameOver = (gameId, winner) => async (dispatch, getState) => {
  const game_doc = db.collection("games").doc(gameId);
  const { overdate, overtime } = getCurrentDateAndTime();

  try {
    await game_doc.update({
      over: true,
      winner: winner,
      overdate,
      overtime,
    });

    const { user } = getState().auth;
    await db
      .collection("users")
      .doc(user.uid)
      .update({
        points: firebase.firestore.FieldValue.increment(POINTS_ON_WIN),
      });
  } catch (error) {
    console.error(error);
  }
};

export {
  createGame,
  deleteGame,
  updateScore,
  listenToRealTimeGameChanges,
  addNewPlayerToCurrGame,
  gameOver,
};
