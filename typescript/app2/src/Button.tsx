import * as React from "react";

const Button = ({ store }: any) => {
  console.log('Button', store.getState())

  return <button>App 2 Button</button>;
}

export default Button;
