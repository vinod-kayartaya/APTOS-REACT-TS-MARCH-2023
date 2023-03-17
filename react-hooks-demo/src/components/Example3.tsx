import React, { useCallback, useState } from 'react';

const Example3 = () => {
    console.log('the method Example3() is called');
    const [count, setCount] = useState(0);

    const incrementHandler = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const decrementHandler = useCallback(() => {
        setCount(count - 1);
    }, [count]);

    return (
        <>
            <h5 className='mt-3 mb-3'>useCallback demo</h5>

            <p>Count: {count}</p>
            <button className='btn btn-primary' onClick={incrementHandler}>
                Increment
            </button>
            <button className='btn btn-primary' onClick={decrementHandler}>
                Decrement
            </button>
        </>
    );
};

export default Example3;
