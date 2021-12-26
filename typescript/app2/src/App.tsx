import * as React from "react";

import { useSelector, useDispatch, ReactReduxContext } from 'react-redux'
import LocalButton from "./Button";


// console.log('store', store, store.getState())
const App = () => {
  // const { store } = React.useContext(ReactReduxContext)
  console.log('app2')
  return (<div>
    <h1>Typescript</h1>
    <h2>App 2</h2>
    <LocalButton />
  </div>)
};

export default App;
