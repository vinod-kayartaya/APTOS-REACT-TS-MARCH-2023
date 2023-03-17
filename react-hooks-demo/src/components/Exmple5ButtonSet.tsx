import React from 'react';
import { IAction } from './Example5Reducer';

interface Exmple5ButtonSetProps {
    dispatch: React.Dispatch<IAction>;
}

const Exmple5ButtonSet: React.FC<Exmple5ButtonSetProps> = ({ dispatch }) => {
    return (
        <>
            <button
                onClick={() => dispatch({ type: 'INCREMENT' })}
                className='btn btn-primary'
            >
                Increment
            </button>{' '}
            <button
                onClick={() => dispatch({ type: 'DECREMENT' })}
                className='btn btn-primary'
            >
                Decrement
            </button>{' '}
        </>
    );
};

export default Exmple5ButtonSet;
