import * as React from "react";
import { useSelector, useDispatch, ReactReduxContext } from 'react-redux'
import { decrement, increment } from "./counterSlice";

const App = () => {
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()
  const { store } = React.useContext(ReactReduxContext)

  console.log('store', store, store.getState())

  return (<div>
    <button
      aria-label="Increment value"
      onClick={() => dispatch(increment())}
    >
      Increment
    </button>
    <span>{count}</span>
    <button
      aria-label="Decrement value"
      onClick={() => dispatch(decrement())}
    >
      Decrement
    </button>

  </div >)
};

export default App;
