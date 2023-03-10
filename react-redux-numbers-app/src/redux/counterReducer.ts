// A reducer takes two paramerers
// 1. current state in the store (or undefined for the first time)
// 2. action dispatched (typically by a user event)

import { ADD, DECREMENT, DIVIDE, INCREMENT, MULTIPLY, SUBTRACT } from "./types";

// The reducer is automatically called whenever an action (object) is dispatched
// The reducer's job is to check the 'type' of action, and return either same or new or modified state, back to the store.

// In most cases, we will have multiple reducers, so as to organize our logics in appropriate reducers. All the reducers will be invoked for every action being dispatched. But generally one action is processed only in one reducer.

const initialState = {
    num: 0,
    incrementCount: 0,
    decrementCount: 0
}

interface IAction {
    type: string,
    payload?: any
}

function counterReducer(state = initialState, action: IAction) {
    console.log('counterReducer called with state', state, 'and action', action);

    if (action.type === INCREMENT) {
        return { ...state, num: state.num + 1, incrementCount: state.incrementCount + 1 }
    }
    if (action.type === DECREMENT) {
        return { ...state, num: state.num - 1, decrementCount: state.decrementCount + 1 }
    }

    if (action.type === ADD) {
        return { ...state, num: state.num + action.payload }
    }

    if (action.type === SUBTRACT) {
        return { ...state, num: state.num - action.payload }
    }

    if (action.type === MULTIPLY) {
        return { ...state, num: state.num * action.payload }
    }

    if (action.type === DIVIDE) {
        return { ...state, num: state.num / action.payload }
    }
    return { ...state };
}

export default counterReducer;