Building Applications with React and Redux
==========================================

Q01. How many stores does a traditional Redux application have?  
A. One per component  
B. One  
C. One per domain  
D. One per page  
Answer: `One`  

Q02. What tool did we use to automate our build?  
A. Gulp  
B. Broccoli  
C. npm  
D. Grunt  
Answer: `npm`  

Q03. What should you try to largely refactor out of container components?  
A. JSX  
B. Dispatches to actions  
C. Objects  
D. Variables  
Answer: `JSX`  

Q04. Why are PropTypes useful?  
A. They provide runtime warnings in development  
B. They enforce proper data formatting in production  
C. They enhance performance  
D. They reduce memory consumption  
Answer: `They provide runtime warnings in development`  

Q05. Where did we run our tests?  
A. PhantomJS  
B. Karma  
C. In Browser  
D. In memory DOM via Node  
Answer: `In memory DOM via Node`  

Q06. What property is required on all actions?  
A. data  
B. type  
C. payload  
D. value  
Answer: `type`  

Q07. What is a benefit of using React’s stateless functional components?  
A. Provides access to all of React’s lifecycle methods  
B. More terse syntax  
C. Utilizes ES6 classes  
D. Prop Types are automatically generated  
Answer: `More terse syntax`  

Q08. Which test did the author find to be least useful?  
A. Reducer  
B. Action creator  
C. Connected Component  
D. Store  
Answer: `Action creator`  

Q09. What piece of Redux did we fork for development and production?  
A. Reducers  
B. Actions  
C. Store  
D. Selectors  
Answer: `Store`  

Q10. To handle async in Redux, what do you need to add to your store?  
A. A hard-coded action  
B. Middleware  
C. Array mutation bundling  
D. A custom render function  
Answer: `Middleware`  

Q11. How does state management in Redux differ from Flux?  
A. Only Redux has actions  
B. Flux only uses one store  
C. Only Flux has reducers  
D. State is immutable in Redux  
Answer: `State is immutable in Redux`  

Q12. What npm package did we use to run parallel processes?  
A. npm-multi  
B. npm-run-all  
C. node-parallel  
D. npm-parallel  
Answer: `npm-run-all`  

Q13. What is the mapStateToProps function for?  
A. It implements two-way binding  
B. It describes what actions to provide on props  
C. It initializes event handlers in the constructor  
D. It declares what state to provide on props  
Answer: `It declares what state to provide on props`  

Q14. How are routes defined in React Router?  
A. JSX  
B. XML  
C. Comma Delimited  
D. Pipe Delimited  
Answer: `JSX`  

Q15. What does it mean when a data structure is immutable?  
A. It cannot be copied  
B. It cannot be destructured  
C. It cannot be changed  
D. It cannot be passed to a function  
Answer: `It cannot be changed`  

Q16. What is a benefit of shallow rendering?  
A. You can test a component in isolation  
B. You can generate tests automatically  
C. You have more power than traditional rendering  
Answer: `You can test a component in isolation`  

Q17. How did we test a React component that was connected to Redux?  
A. We exported the raw component and tested it instead  
B. We refactored connect to be public  
C. We attached a debugger to the connect function  
D. We used Redux’s test adapter library  
Answer: `We exported the raw component and tested it instead`  

Q18. Where do you declare initial state in React’s ES6 Class style components?  
A. The class constructor  
B. The setInitialState function  
C. The getInitialState function  
D. The initialState property  
Answer: `The class constructor`  

Q19. What React feature is disabled when built in production mode?  
A. State recursion  
B. PropType validation  
C. Element identity  
D. Event delegation  
Answer: `PropType validation`  

Q20. What library did we use to handle asynchrony in Redux?  
A. Redux-thunk  
B. Redux-saga  
C. Redux-promise  
D. Redux-async  
Answer: `Redux-thunk`  

Q21. What is an action creator?  
A. A pattern for generating DOM events  
B. A class that generates functions  
C. A recursive function that emits actions in a loop  
D. A function that returns an object with a type property and some optional data  
Answer: `A function that returns an object with a type property and some optional data`  

Q22. How is Webpack configured?  
A. Via webpackrc  
B. Via webpack.com  
C. Via JSON in webpack.config.js  
D. Via XML in webpack.xml  
Answer: `Via JSON in webpack.config.js`  

Q23. Which statement describes a presentational component?  
A. Subscribes to Redux state  
B. Focused on how things look  
C. Aware of Redux  
D. Dispatches Redux actions  
Answer: `Focused on how things look`  

Q24. What is a reducer?  
A. An object that removes user access rights  
B. A function that empties the local data store  
C. A function that takes state and an action and returns state.  
D. An object that serializes actions  
Answer: `A function that takes state and an action and returns state.`  

Q25. When is Enzyme’s mount function useful?  
A. When you don’t need the DOM  
B. When you want to minimize memory use  
C. When you want to maximize test speed  
D. When you want to test React component interactions  
Answer: `When you want to test React component interactions`  

Q26. What is forbidden in a Redux Reducer?  
A. Side-effects  
B. Performing arithmetic  
C. Copying data  
D. Calling other functions  
Answer: `Side-effects`  