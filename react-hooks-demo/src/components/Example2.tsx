import React from 'react';
import useWindowSize from '../hooks/useWindowSize';

const Example2 = () => {
    const { width, height } = useWindowSize();

    return (
        <>
            <p className='lead'>
                Window size: {width} x {height}
            </p>
        </>
    );
};

export default Example2;
