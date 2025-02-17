import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
// import store from './store'
import App from "./App";
import store from "appstore/store"

console.log('store', store)

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById("root"));
