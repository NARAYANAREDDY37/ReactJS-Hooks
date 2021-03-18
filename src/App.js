import "./App.css";
/* import logo from './logo.svg';
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
import HookCounterFour from './components/HookCounterFour'
import ClassCounterOne from './components/ClassCounterOne'
import HookCounterOne from './components/HookCounterOne'
import ClassMouse from './components/ClassMouse'
import HookMouse from './components/HookMouse'
import MouseContainer from './components/MouseContainer'
import IntervalClassCounter from './components/IntervalClassCounter'
import IntervalHookCounter from './components/IntervalHookCounter'
import DataFetching from './components/DataFetching'
import ComponentC from './components/ComponentC'
import React from 'react' */
/* import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import ComponentP from "./components/ComponentP";
import ComponentQ from "./components/ComponentQ";
import ComponentR from "./components/ComponentR"; */
import DataFetchingOne from './components/DataFetchingOne'
import DataFetchingTwo from './components/DataFetchingTwo'

/* export let UserContext = React.createContext()
export let ChannelContext = React.createContext() */
/* import React, { useReducer } from "react";

export let CountContext = React.createContext();

let initialState = 0;
let reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
}; */

function App() {
  //let [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <DataFetchingTwo/>
      {/* <DataFetchingOne/> */}
    </div>
  );
}
export default App;

      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div className="App">
          Count - {count}
          <ComponentP />
          <ComponentQ />
          <ComponentR />
        </div>
      </CountContext.Provider> */}
    



{
  /* <CounterThree/> */
}
{
  /* <CounterTwo/> */
}
{
  /* <CounterOne/> */
}
{
  /* <UserContext.Provider value= {"Narayana"}>
        <ChannelContext.Provider value= {"Random Things"}>
          <ComponentC/>
        </ChannelContext.Provider>
        
      </UserContext.Provider> */
}
{
  /* <DataFetching/> */
}
{
  /* <IntervalHookCounter/> */
}
{
  /* <IntervalClassCounter/> */
}
{
  /* <MouseContainer/> */
}
{
  /* <HookMouse/> */
}
{
  /* <ClassMouse/> */
}
{
  /* <HookCounterOne/> */
}
{
  /* <ClassCounterOne/> */
}
{
  /* <HookCounterFour/> */
}
{
  /* <HookCounterThree/> */
}
{
  /* <HookCounterTwo/> */
}
{
  /* <HookCounter/> */
}
{
  /* <ClassCounter/> */
}
