/// <reference types="react" />

declare module "appstore/store" {
  const store: any;

  export default store;
}

declare module "appstore/counterSlice" {
  export function increment(): void;
  export function decrement(): void;
  export function incrementByAmount(value: number): void;
}

