import React from "react";

export const OtherPlayersInitialScreen = ({ currGame }) => {
  return (
    <>
      <h2 style={{ paddingLeft: "10px" }}>Game is not yet started by {currGame?.createdby}.</h2>
    </>
  );
};