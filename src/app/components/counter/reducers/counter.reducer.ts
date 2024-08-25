import { createReducer, on } from "@ngrx/store";

import { increment, decrement, reset, setCounter, counterActions } from "../actions/counter.action";

// defining the shape of the state
export type counterType = number ;

// interface counterInterface {
//     counter: number,
// }

// setting the initial state
// const initialValue:counterType = 0;
let DEFAULT = 0;
const initial:counterType = Number(localStorage.getItem('counter')) ?? 0;

export const _counterReducer = createReducer(
    // initialValue,
    initial,
    on(increment, (state:number, {interval}):counterType => state + interval),
    on(decrement, (state:number, {interval}):counterType => state > 0 ? state - interval : 0),
    on(reset, ():counterType => DEFAULT),
    on(setCounter, (state, {counter}) => (DEFAULT = counter, counter)),
)

export function reducers(state:counterType | undefined, action:counterActions): counterType {
    return _counterReducer(state, action)
    // return counterReducer(state ?? 0, action as counterActions)
}