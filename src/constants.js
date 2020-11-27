export const max_score = 10;

export const content = [
  "Recently I was thinking about how much I used to use CSS and nowadays I don't. Don't get me wrong, CSS is still running under the hood and empowering the web pages and sometimes other applications' layouts as well. But how much are we involved in CSS actually these days and how much do we get our hands dirty working with it? Since there are awesome frameworks like Zurb Foundation, Bootstrap, Vuetify, Semantic UI, and many more I think the importance of understanding CSS for new developers getting into web development is slightly losing its value. And recently Tailwind is taking over the development world with its utility first approach. So I decided to write this article explaining my experience with CSS since pure vanilla CSS till advanced frameworks like Vuetify. In case you are a newcomer to the web development world you might get confused with all these tools out there named SASS/SCSS, LESS Stylus, and so many more. CSS (stands for Cascading Style Sheets) is a language (not a programming language) used for describing the presentation of a web page. In a simpler way, CSS is used for giving your web page beauty. CSS features a concept of selectors and attributes. It is pretty simple, a selector selects an element or multiple elements and applies some styles to them. There are two imaginations of how CSS works, many people think CSS selectors apply the styles to the elements and some people think it is the element that selects to use the styles of a CSS definition. But it is good to know that it is CSS that selects your elements. Preprocessors were the first step to kill vanilla CSS. You can barely see someone writing vanilla CSS in an enterprise project. The only people who are using vanilla CSS might be the students who are learning web development in the early stages. A framework might seem scary when calling it a FRAMEWORK but it is literally a pre-written CSS file that helps you move forward without writing lots of CSS codes yourself. For instance, a button might look ugly on a webpage without proper CSS customization. A framework gives you a simple way to apply a default style to your button. So this is another step that strays us further from CSS and understanding it. Using a framework might get really in the way of understanding some advanced concepts of CSS like grids or positioning and it isn't a good thing in my opinion. If you are working with new tools of web development like Vue or React you are highly likely using a component library to render your UI. I'm using Vuetify as my primary UI framework. When using these frameworks you might not even need to work with classes and most components already have a default look. See this simple box with shadows and borders built using Vuetify. In most projects, you won't even need to write a single line of CSS when using frameworks. This is an absolutely personal opinion. I think CSS is going to be something like Assembly language. Eventually, no one is going to use it directly but it is going to empower other tools, only some people with high knowledge of CSS will be on the side of making and developing higher-level tools.",
  'Over the last few days, since it became clear that Trump had Covid, pundit after pundit has, weepily, asked you and I to do something remarkable: to have empathy for a figure like Donald Trump. But should we? Has anyone really thought this through? Would it in fact be corrosive to have empathy for someone responsible for so much misery, suffering, and heartache? Or not? It’s often said that Donald Trump has no empathy, but the truth is darker still. Like narcissists of a certain kind, he has the opposite of empathy, not just its absence: malice. He perpetually bears a grudge. A brief list of people he’s dehumanized, vilified, and scapegoated includes the disabled, the sick, minorities, gay people, women, the press, “liberals,” opponents — it goes on and on. Donald Trump wishes the world the worst if it’s not subservient to his desires, which is the emotion behind his many tantrums and outbursts. If you don’t submit to him, you become an “enemy,” a “traitor,” someone who deserve only the worst. That is malice. It is the primary attitude and emotion of a malignant narcissist, and it is what defines Donald Trump’s personality type, like so many other authoritarians. If the world doesn’t revolve around them — they are very happy to see it crash and burn. Or, in Trump’s case, for a nation to fall ill with Covid, and end up with more than 200,000 dead. What should be immediately apparent, then, is that asking us to have empathy for a figure like Donald Trump immediately gives rise to a double standard. We are to feel something for a man who feels nothing for us, except to see the rest of us hateful, weak, and contemptible. But the question of empathy for the malicious goes much deeper than that. When pundits say “empathy,” they don’t really examine what they mean. They mean something like sympathy, perhaps, or casual well-wishes. To have empathy, though, is to step inside someone’s emotional center, their psyche, their soul, their mind. And that is where having empathy for a figure like Donald Trump begins to get genuinely troubling. To empathise with Donald Trump means to feel his emotions, and to sympathise with the moral logic that produces them. It means to feel all the terrible things he has said, and mean them, to an extent: that immigrants are vermin, that refugees and minorities are animals, that women are objects to be exploited, that power is a thing to be abused. It is to say that there is some kind of tolerable logic behind putting children in concentration camps, and cutting women open in them. When we “empathise” with such abuses of power, then we are also normalising and legitimating them. Or at least we run the grave risk of doing so. We are being asked to say, “hey, I understand! I get why you would feel that way!” But is it remotely normal to pretend that one “gets” why a figure like Trump would want to treat mass death with indifference or order his shock troops to beat and abduct people in the streets?',
  'One of the most difficult things to do on the web is figuring out if an element is visible or where an element is in relation to its parent element. Historically, this meant running calculations triggered by a scroll event, which can quickly become a performance liability for your app. Luckily, a better and much more performant way to do this has been introduced: the Intersection Observer. The Intersection Observer API allows for asynchronous checking of the ratio of the intersection of an element with a viewport and will only fire a callback when the predefined threshold(s) are met. This has opened up many user experiences that were difficult to implement in a performant way, such as infinite scrolling, lazy load images, or delaying animations until visible. Recently, I wanted to explore how one would go about implementing this in a react hook. I ran into many gotchas, but luckily Dan Abramov recently posted a very helpful guide to useEffect over at his blog, Overreacted, which helped me immensely in understanding these gotchas and what I needed to do to fix them. So I thought I would summarize what I learned to hopefully help you avoid the same mistakes I ran into. How Does The Intersection Observer API Work? In order to get a complete understanding of the Intersection Observer API, I would recommend that you check out the documentation found at MDN. Simply put, you need to create an Observer that will ‘observe’ a DOM node and call a callback when one or more of the thresholds are met. A threshold can be any ratio from 0 to 1 where 1 means the element is 100% in the viewport and 0 is 100% out of the viewport. By default, the threshold is set to 0. Optionally, You can pass an object as a second parameter to the IntersectionObersver constructor. This object lets you configure the observer. You can configure 3 possible properties: root, rootMargin, and threshold. We have the observer, but it’s not yet observing anything. To start it observing, you need to pass a dom node to the observe method. It can observe any number of nodes, but you can only pass in one at a time. There is already a big gotcha with this. Every time the component rerenders, useIntersect will be called, which means that the observer is going to be instantiated every time with a new IntersectionObserver. This is not the intended behavior. What we want to use is the useRef hook. The useRef hook is often used to keep track of a DOM node, so you can do imperative things with it later on (such as give it focus), but useRef can be used to keep any value across rerenders. We access the value of a ref through the current property on the ref itself. The ref itself is mutatable and that current value can be reassigned anytime, but we will always get back the same ref object with it’s most recent value on every rerender. One might ask, what is the difference between useRef and useState since both will return the current value. The biggest difference is how you update the value and what that means to the rest of the component using it. You can only update the state using the second value returned from useState where the ref’s value can be updated anytime by assigning a new value to the current property. Also, updating the value of a ref will not signal a rerender, where updating the state will.',
  'If you use React for front end development, chances are that you have heard of service workers. If you are not sure what they do, or how to configure them properly, this beginner’s guide to service workers in React should serve as a good first step in creating feature-rich, offline experiences in React. Service workers are scripts that are run by the browser. They do not have any direct relationship with the DOM. They provide many out of the box network-related features. Service workers are the foundation of building an offline experience. They enable features such as push notifications and background sync. Service workers are scripts that are run by the browser of a client. They do not have any direct relationship with the DOM. They provide many out of the box network-related features. Service workers are the foundation of building an offline experience. They enable features such as push notifications and background sync. If you develop the ability to activate and properly configure service workers in React, you can utilize endless possibilities by judiciously intercepting and managing network requests. In React, service workers are automatically added when you create your application through the create-react-app command, through SWPrecacheWebpackPlugin. Service workers ensure that the network is not a bottleneck to serve new requests. Let us look at the constituents of a service worker, and then explore how you can configure them to utilize their full potential. The loss of network is a common issue that developers face in ensuring a seamless connection. Thus, in recent times, the concept of offline applications to ensure superior user experience is gaining popularity. Service workers provide web developers with a lot of benefits. They improve the performance of your website. Caching key parts of your website only helps in making it load faster. Enhances user experience through an offline-first outlook. Even if one loses connectivity, one can continue to use the application normally. They enable notification and push APIs, which are not available through traditional web technologies. They enable you to perform background sync. You can defer certain actions until network connectivity is restored to ensure a seamless experience to the user. The lifecycle of a service worker is not linked to that of your web application. You install a service worker by registering it using JavaScript. This instructs the browser to begin installing it in the background. This is also the time when you get to cache your required assets. When the installation step is successful, the activation process starts. Once activated, the service worker is associated with any page in its scope. Unless it is invoked by an event, it will be terminated. The lifecycle of a service worker typically needs to be coded by the developer. In case of service workers in React, the life cycle management is handled by React itself, which makes the process easier for a developer to enable and use service workers.',
  "Let me start by saying I’m a big fan of Next.js. It’s an amazing framework for building React applications, especially when you need Server-Side Rendering (SSR). One day, I’ll write an article covering all the great things about this framework, but luckily a lot of people are already doing that. Instead, I’m now going to explain why I migrated one of my many side projects from Next.js to Create React App. Note: If you don’t care about the background story, scroll down and go straight to the conclusion. When you have many side projects (that don’t make you any money), it’s nice if you can host them for free. I have a Ruby on Rails project hosted on a custom domain on Heroku that’s already costing me more than 30 dollars a month, which is fine — if you have just one project or if that project is making you some money… The cool thing about building a React application with Firebase and Firestore is that you can build a full-stack application and go live without any costs (except for the custom domain name). I did that with side projects like FlowReads and MakerMove. I also made React Milkshake, a boilerplate for creating apps with this stack. For a new side project, I was going for that same approach but with Nextjs, and although that’s working nicely, there was one issue I ran into. The best place to deploy your Nextjs application is Vercel (formerly Zeit). Although you can start for free, I had to upgrade to the team plan (starting at 20 dollars a month) if I wanted to keep my current project live. With Next.js, you can choose whether you want your pages to be statically generated or server-rendered. If your page is server-rendered, it means that a serverless function is created for your page during the build. The team at Zeit just decided to limit the number of serverless functions to 12 — and my application had 14 pages. That meant I could no longer deploy this application — it would fail during the build process due to this limitation. I can understand the decision to limit the number of serverless functions on the free tier, but the most frustrating part of this is that my site was already deployed. After Zeit has added this limitation I couldn’t deploy any changes without upgrading! You might be thinking “But why are you server rendering every single page? Couldn’t you just statically serve at least a couple of pages?” That’s what Zeit also recommended and it’s exactly what I wanted. The only problem is that with my current implementation (using Redux), I can’t. Let me explain. With Next.js you can use getIntialProps (or since version 9.3 getServerSideProps and getStaticProps) inside your page components, which determines if a page should be server-rendered of statically generated (read more about that here). If you don't need any data inside your page it will be statically generated, but when you use getInitialProps inside _app.js all your pages are server-rendered. You will get this warning message when building your application: You have opted-out of Automatic Static Optimization due to getInitialProps in pages/_app. Now, when you use Redux as your state management library, you probably use next-redux-wrapper, so you don't have to implement anything complex to make your client state of the store in sync with the server, etc. At least, that’s what I did, and here’s the problem: This library calls getInitialProps on your _app.js file, so all your pages will implement server-side rendering. To be honest, my application didn’t need server rendering, because everything is behind a login screen. I basically only used Next.js because I wanted to experiment with it. I probably had more options than to just refactor my project to CRA, but I figured the hassle that can come from server-side rendering (even with Next.js) is not worth the time for a project that doesn’t even benefit from it that much. I also like to host things for free as long as I’m still in the development phase and with Next.js I’m not sure I can. If you use redux inside your Nextjs application (with next-redux-wrapper) and have more than 12 routes, you will need to upgrade to the team plan if you host your project on Zeit. If you don’t need SSR, are using redux, and also want to host it for free, you probably don’t want to go with Next.js. Also, if you want to use the SSG options of Next.js, you should not go with Redux. Otherwise, I can recommend you give Next.js a try because it’s a really good framework!",
  'Like a lot of men, in pursuit of novelty and amusement during these months of isolation, I grew a mustache. The reviews were predictably mixed and predictably predictable. “Porny”? Yes. “Creepy”? Obviously. “ ’70s”? True (the 18- and 1970s). On some video calls, I heard “rugged” and “extra gay.” Someone I love called me “zaddy.” Children were harsh. My 11-year-old nephew told his Minecraft friends that his uncle has this … mustache; the midgame disgust was audible through his headset. In August, I spent two weeks with my niece, who’s 7. She would rise each morning dismayed anew to be spending another day looking at the hair on my face. Once, she climbed on my back and began combing the mustache with her fingers, whispering in the warmest tones of endearment, “Uncle Wesley, when are you going to shave this thing off?” It hasn’t been all bad. Halfway through a quick stop-and-chat outside a friend’s house in July, he and I removed our masks and exploded at the sight of each other. No way: mustache! I spent video meetings searching amid the boxes for other mustaches, to admire the way they enhance eyes and redefine faces with a force of irreversible handsomeness, the way Burt Reynolds never made the same kind of sense without his. The mustache aged me. (People didn’t mind letting me know that, either.) But so what? It pulled me past “mature” to a particular kind of “distinguished.” It looks fetching, for instance, with suits I currently have no logical reason to wear. One afternoon, on a group call to celebrate a friend’s good news, somebody said what I didn’t know I needed to hear. More reviews were pouring in (thumbs down, mostly), but I was already committed at that point. I just didn’t know to what. That’s when my friend chimed in: “You look like a lawyer for the N.A.A.C.P. Legal Defense Fund!” What I remember was laughter. But where someone might have sensed shade being thrown, I experienced the opposite. A light had been shone. It was said as a winking correction and an earnest clarification. Y’all, this is what it is. The call moved on, but I didn’t. That is what it is: one of the sweetest, truest things anybody had said about me in a long time.',
  'This month, with no warning to the Pentagon, President Trump’s national security adviser abruptly announced that the United States would reduce its troops in Afghanistan to 2,500 by early next year, rather than 4,500 as previously decided. Hours later, the president tweeted that no, he wanted them all back by Christmas. Caught by surprise, the chairman of the Joint Chiefs of Staff, Gen. Mark Milley, declared that he would proceed based on conditions and existing plans, and the Department of Defense noted — again — that it does not respond to commands over Twitter. It was a shockingly irresponsible exercise of executive power, especially as military officials have consistently warned that a quick withdrawal would put frontline soldiers’ lives at risk and undermine the peace deal being discussed with the Taliban. But after nearly four years, Washington and the world have learned to their dismay that this is the way Donald Trump does business. To his supporters, his diplomatic incompetence must be a source of frustration — Why aren’t the troops home? Where’s the wall? Yet his critics take no solace in his vandalism of alliances built up at the cost of many lives and the expenditure of much hard-earned treasure over the course of many generations. “From this day forward, it’s going to be only America first,” Mr. Trump warned in his Inaugural Address. Today, what that meant is clear in the decline of American leadership and the hallowed American brand, in the wariness of allies and the glee of strongmen. The successes he touts — whether pulling American troops out of the Middle East, a trade war with China, ripping up the Iran nuclear deal, or going after Venezuela and Cuba — are dubious at best and illusory at worst. The administration’s peace plan for the Middle East turned out to be a bag of gifts for the Israeli right, effectively undermining America’s potential as a mediator with the Palestinians. China is regularly turning up the heat in Hong Kong, Taiwan and the South China Sea. Sanctions against Iran are opposed by allies and threaten a humanitarian disaster; Nicolás Maduro remains firmly entrenched in Caracas. As for Mr. Trump’s bizarre summits with the North Korean despot, Kim Jong-un, the latest love letter from Pyongyang was a liquid-fueled monster of an intercontinental ballistic missile rolled out on an 11-axle transporter at a military parade. Despite all his many calls to bring the troops home and his power to order it done, thousands are still deployed around the globe, including in Iraq, Afghanistan and Syria. The troubles of the world are not all Mr. Trump’s doing. China’s rise, Russia’s machinations, the tenacity of Mr. Maduro, the sectarian feuds in the Middle East and the new crop of authoritarian rulers were all underway before he was inaugurated, and would have taxed any president. But Mr. Trump’s willful ignorance of the world (before meeting Russia’s Vladimir Putin in Helsinki he reportedly asked aides whether Finland was part of Russia) combined with his disdain for diplomacy, intelligence and experience (“My primary consultant is myself and I have a good instinct for this stuff”) have often made bad matters worse.',
  'Becoming part of a digital marketing training program is something that a lot of people are doing recently and with good reason. There is so much chance to make a lot of money with no working very many hours. In order to make your move to functioning from home successful, you will want to follow some marketing tips on how to decide the best agenda for you. The cause that you even need help in the first place is since there are so many different programs out there that all will assure you the world. Not all of these will work out, so you need to know how to decide the best one. e of the best marketing tips to use when making a decision on the many different marketing training programs is to go with an agenda that uses video training. Not only will you study everything you will need to know to get in progress, you also will be bright to see that the list actually is easy to use. There are so many programs that claim to be easy, yet when you get in progress it is really puzzling. Then the Institute is not obtainable to help you out, which is one more tip as well. You should go with a program that has 24/7 support which is provided. Another helpful marketing tip that will help you choose the best digital marketing program is to go with the one you actually will be able to use right away. There are some programs out there that in fact use a system once you get it set up. This is huge because you will not have to be at your computer all day every day. You will be able to step away from your home office and still strictly be working because your computer scheme still is going strong for you. This is your best chance at creating a lot of money. In addition, to have a digital marketing training program, another one of the important internet marketing course tips is to go with the best program that does not necessitate you to be a computer genius. You want to go with the best program that does not have you set up website after website or even know how to update files into your system. There are successful programs out there but you just have to know how to spot them. Let me tell you something about Hiaim digital marketing Institute. We are offering of the best digital marketing program to the candidatesComputer Technology Articles, according to our past trainees we are the best in the field. I spotted one out there that demonstrates a new way to learn all about online marketing in video format that anyone can understand. Imagine what it would be like to see behind the curtain of one of the most successful online marketers in the business and clone his success.',
  'It is the trend of digitalization today and its influence in every single sphere of modern lives is undeniable. The domain of marketing has evolved as well and every single business has adopted the concept of digital marketing today in order to survive in the market. Competition is soaring high and one has to struggle hard to establish a consistent online presence so that ultimately success can be attained in the form of increased revenue and reputation. At JDM Web Technologies, we become your perfect digital marketing partners by not only providing the best search engine optimization services but also giving the best possible shot with our other gamut of services related to digital marketing. In fact, we make sure that all the sub-segments of digital marketing work in close collaboration to produce the final output in a cost-effective and efficient manner as well. Search Engine Optimization or SEO is one of the most widespread digital marketing strategies, which has gained lot of importance in terms of marketing because of its advantages. JDM Web Technologies is a search engine optimization company India that revolves around the Google and other popularly used search engines nowadays. Actually, people all over the world keep visiting Google in order to find out information about anything and everything because this is the hotspot of information. Life without Google is hard to envisage and this particular fact is being utilized in search engine optimization services. Google has come up with various enhanced functionalities that have increased the scope of SEO to a large extent. In other words, this technique is used to improve the rank of a particular business website in the Google and other famous search engines like Yahoo and Bing. This is required for enhanced reach and visibility of the products/services and the brand as a whole because more visitors of Google will be getting to see the websites in the result pages and the chances of augmented web traffic will also accelerate at the same time. In fact, JDM Web Technologies is such a search engine optimization company India that takes care of the business websites in a personalized manner because every single business is unique in its own way. Therefore, it is also important to get the targeted audience from the huge crowd of visitors that is also ensured with our SEO services. Our company has the privilege of having experienced SEO masters who have outperformed the other contemporaries in this domain with their SEO skills. They have maintained a streamlined approach in SEO designing and have always succeeded in placing the business websites in the first page of Google itself by making use of enriched content and building links to other relevant websites so that the interconnection of websites help in quicker reach amongst the masses. When it comes to making profit, spreading the word is crucial because only then will the people come to purchase the products/services and sales will be increased. We, at JDM Web TechnologiesFind Article, understand the need of getting the optimum return on investment. Please allow us to achieve the same for your business as well!',
  'Lifting gear undergoes continual stresses when in use, as a result of lifting of weighty loads. If any part of the lifting apparatus fails, then grave accidents may well happen. By inspecting all equipment ahead of each use, hazards should be kept to a minimum, however it is essential to have every kind of lifting equipment professionally inspected and possibly load tested at frequent intervals, to further reduce any risks of gear breakdown. This will also provide you with required paperwork, certification for your records, should health and safety come calling. When using any type of lifting gear, you will find a set of lawfully bound rules in place that should be adopted at all times. L.O.L.E.R. (the lifting operations and lifting equipment regulations) instigated these regulations to help to reduce the risk involved when lifting weighty objects. The lifting Operations and Lifting Equipment Regulations are specifically designed for all varieties of lifting gear and applications, but there are an extra set of rules that also need to be followed; these are stated by The Provision and Use of Work Equipment regulations (P.U.W.E.R.) and refer to all kinds of equipment used in the place of work. Very briefly these regulations say that the employer is accountable for undertaking risk assessments, ensuring that equipment is installed and maintained correctly, and also to make sure that they continue to be in good, safe working condition, (i.e. by means of servicing and inspections). The remainder of this post will refer to the L.O.L.E.R. regulations. There are three core areas which are referred to; they are: 1; the primary lifting equipment like a gantry or hoist. 2: the lifting accessories like clamps, eye bolts, shackles and slings, and finally 3; the lifting operation itself. Each of these 3 areas is divided into 3 more sub divisions which are vital, and stipulate: 1; you need to ensure the lifting gear is safe to operate. 2; Make sure the gear is utilised in a safe and suitable way. 3; ensure that it stays safe to use, (via testing and inspection). For the explanations stated in the above criteria, it is vital to have all types of lifting equipment inspected by qualified, specialized people at regular intervals. Lifting accessories such as chain slings, shackles, hooks, rope and web slings should be inspected on a half yearly basis. The primary lifting gear such as Jib cranes, mobile gantry cranes and hoisting devices require yearly inspections, though any equipment that is used to lift people must be inspected 6 monthly. The makers of lifting gear must work to reduce possible hazards related to the equipment, typically by displaying the CE mark and providing the EU declarations of conformity, which must be kept on file with testing and inspection certification. Any corporation which makes use of lifting gear of any variety are duty-bound by the L.O.L.E.R. regulations that are enforced by health and safety officers. If these regulations are not met you are given a specific time frame to rectify the problem, if serious though, much firmer action might be taken. Planned preventative maintenance is a cost effective measure, by ensuring safety of equipment, minimising risks to personnel, and elongating the operational life of your gear. Regular service contracts are often available from lifting equipment specialists, who will call you at the appropriate intervals to book in an inspection. Qualified engineers will then carry out the relevant procedures and issue new documentation for your records providing they are deemed safe to use. Any problems noted can be speedily dealt with, causing little down time. ',
  `The ghosts of baseball past have been paved over. League Park is now a community park, covered in artificial turf. The Ebbets Field grounds hold an apartment complex. The sites that housed the 1920 World Series illustrate the intangibility of a century-old event. And yet, while we can’t physically touch 1920, we can, weirdly, relate to it. Then, as now, Major League Baseball was wrapping up a year that had been steeped in scandal. Then, as now, the United States had been ravaged by a global health crisis. The uniforms and style of play were different, and the Series itself was a best-of-nine. But because triumph over adversity remains a celebrated motif in sports and in life itself -- and because of the strange parallels connecting 1920 and 2020 -- a long-ago Fall Classic offers a story worth retelling. Babe Ruth’s arrival to New York prior to that season in the most significant swap in MLB history instantly elevated the ceiling of the Yankees and was part of a larger change in the league at large. Ruth’s prodigious power and a livelier baseball contributed to a significant rise in runs per game league-wide. Furthermore, the 1920 season saw the whispers about the Chicago White Sox fixing the previous year’s World Series grow into shouts. Evidence surfaced that gamblers had rigged an Aug. 31, 1920, game between the Cubs and Phillies, and a subsequent grand jury investigation quickly turned to the topic of the '19 Series, in which outfielder “Shoeless” Joe Jackson and the Sox had lost to the Cincinnati Reds in suspicious fashion. Soon, the public accounts and admissions mounted, and the Black Sox Scandal, as it is now known, enveloped the game and threatened its future. As baseball’s public perception problem was rising, the threat posed by the so-called “Spanish Flu” was at long last diminished. The strain of H1N1 virus had spread uncontrolled through 1918 and '19 -- killing, by some estimates, more than 50 million people worldwide and about 675,000 in the U.S. and overwhelming health systems. The pandemic had its last gasp with a relatively minor fourth wave in isolated areas -- including New York City -- in the spring of 1920. And by this point, the American economy was reeling from the effects of the pandemic, with high unemployment rates and deflation and low industrial production. But while a rally in business production would not arrive until the second half of '21, the collective immunity to the influenza strain and the calming of fears for those who had survived both the pandemic and the Great War led a societal euphoria to begin to emerge in '20. Baseball, in a way, represented the times. The Babe’s first big blasts in the Bronx can, in retrospect, be seen as a signal of the start of the Roaring Twenties. And just as the world was trying to put so much death and devastation behind it, the first World Series of the 1920s would be won by a team full of men trying to mend their broken hearts. To get to the World Series, the Brooklyn Robins had to win 17 of their final 21 games to pull away in what had previously been a tight National League pennant race. Yet as impressive as that pennant push might have been, it was nothing compared to the September sprint of a Cleveland Indians club battling the White Sox and the Yankees while mourning the loss of a beloved teammate. The AL standings were in a virtual three-way tie on what would become the fateful date of Aug. 16. On the mound that day at the Polo Grounds was Yankees right-hander Carl Mays, who had a deceptive submarine delivery and a reputation for a dour disposition and beanballs. His level of popularity stood in direct contrast to that of Indians shortstop Ray Chapman, affectionately known as “Chappie” and viewed as one of the Tribe’s most vital cogs.`,
  `My goal with this post is to persuade CMS platform developers and contributors (i.e. the people who develop CMS cores) that now is the time to implement support for the browser-level image lazy-loading feature. I'll also share recommendations on how to ensure high-quality user experiences and enable customization by other developers while implementing lazy-loading. These guidelines come from our experience adding support to WordPress as well as helping Joomla, Drupal, and TYPO3 implement the feature. Regardless of whether you're a CMS platform developer or a CMS user (i.e. a person who builds websites with a CMS), you can use this post to learn more about the benefits of browser-level lazy-loading in your CMS. Check out the Next steps section for suggestions on how you can encourage your CMS platform to implement lazy-loading. Over the past year, lazy-loading images and iframes using the loading attribute has become part of the WHATWG HTML Standard and seen growing adoption by various browsers. These milestones however only lay the groundwork for a faster and more resource-saving web. It is now on the distributed web ecosystem to make use of the loading attribute. Content management systems power about 60% of websites, so these platforms play a vital role in bringing adoption of modern browser features to the web. With a few popular open-source CMSs such as WordPress, Joomla, and TYPO3 having already implemented support for the loading attribute on images, let's have a look at their approaches and the takeaways which are relevant for adopting the feature in other CMS platforms as well. Lazy-loading media is a key web performance feature that sites should benefit from at a large scale, which is why adopting it at the CMS core level is recommended. Adoption of non-standardized browser features in CMSs facilitates widespread testing and can surface potential areas of improvement. However, the general consensus across CMSs is that, as long as a browser feature is not standardized, it should preferably be implemented in the form of an extension or plugin for the respective platform. Only once standardized can a feature be considered for adoption in the platform core. Browser support of the feature is a similar concern: The majority of CMS users should be able to benefit from the feature. If there is a considerable percentage of browsers where the feature is not yet supported, the feature has to ensure that it at least has no adverse effect for those. A common concern with lazy-loading implementations is that they in principle increase the likelihood that an image will not be loaded once it becomes visible in the user's viewport because the loading cycle starts at a later stage. Contrary to previous JavaScript-based solutions, browsers approach this conservatively and furthermore can fine-tune their approach based on real-world user experience data, minimizing the impact, so browser-level lazy-loading should be safe to adopt by CMS platforms.`,
];
