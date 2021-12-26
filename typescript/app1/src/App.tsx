import * as React from "react";
import { useSelector, useDispatch, ReactReduxContext } from 'react-redux'
import * as counterSlice from "appstore/counterSlice";
const RemoteButton = React.lazy(() => import("app2/Button"));

const App = () => {
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()
  const { store } = React.useContext(ReactReduxContext)

  console.log('store', store, store.getState())

  return (<div>
    <h1>Typescript</h1>
    <h2>App 1</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton store={store} />
      <button
        aria-label="Increment value"
        onClick={() => dispatch(counterSlice.increment())}
      >
        app1 inc
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(counterSlice.decrement())}
      >
        app1 dec
      </button>
    </React.Suspense>
  </div >)
};

export default App;
