import React, { ChangeEvent, useMemo, useState } from 'react';

const Example4 = () => {
    const [num, setNum] = useState(5);
    const [text, setText] = useState('');

    const handleTextChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setText(evt.target.value);
    };

    const handleNumChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setNum(Number(evt.target.value));
    };

    const factorial = useMemo(() => {
        console.log('Calculating factorial...');
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }, [num]);

    return (
        <>
            <h5 className='mb-3 mt-3'>useMemo example</h5>

            <form>
                <input
                    type='text'
                    className='form-control'
                    value={text}
                    onChange={handleTextChange}
                />

                <input
                    type='number'
                    className='form-control'
                    value={num}
                    onChange={handleNumChange}
                />
            </form>

            <p className='lead'>
                Factorial of {num} is {factorial}
            </p>
        </>
    );
};

export default Example4;
