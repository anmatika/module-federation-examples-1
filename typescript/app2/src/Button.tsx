import { incrementByAmount } from "appstore/counterSlice";
import * as React from "react";
import { connect, useDispatch } from "react-redux";

type State = {
  counter: {
    value: number
  }
}

const Button = ({ counter }: State) => {
  const dispatch = useDispatch()

  return (<div>
    <span>{counter.value}</span>
    <button onClick={() => dispatch(incrementByAmount(10))}>App2 inc +10</button>
  </div>)
}

export default connect((state: State) => {
  return {
    counter: state.counter
  }
})(Button);
