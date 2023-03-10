import { ADD, DIVIDE, MULTIPLY, SUBTRACT } from "./types";

export const add = (num: number) => ({
    type: ADD,
    payload: num
});

export const subtract = (num: number) => ({
    type: SUBTRACT,
    payload: num
});

export const multiply = (num: number) => ({
    type: MULTIPLY,
    payload: num
});

export const divide = (num: number) => ({
    type: DIVIDE,
    payload: num
});

