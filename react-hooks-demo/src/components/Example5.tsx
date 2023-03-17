import React, { useReducer } from 'react';
import countReducer, { IState } from './Example5Reducer';
import Exmple5ButtonSet from './Exmple5ButtonSet';

const initialState: IState = { count: 0 };

const Example5 = () => {
    const [state, dispatch] = useReducer(countReducer, initialState);

    return (
        <>
            <h5 className='mb-3 mt-3'>useReducer hook demo</h5>
            <p>Value of count: {state.count}</p>
            <Exmple5ButtonSet dispatch={dispatch} />
        </>
    );
};

export default Example5;
