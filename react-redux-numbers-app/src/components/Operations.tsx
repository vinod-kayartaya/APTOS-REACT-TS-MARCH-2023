import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add, divide, multiply, subtract } from '../redux/actionCreators';

const Operations = () => {
    const [num, setNum] = useState<number>(0);
    const dispatch = useDispatch();

    return (
        <>
            <div className='container'>
                <div className='mb-3'>
                    <input
                        type='number'
                        placeholder='enter a number'
                        value={num}
                        onChange={(e) => setNum(parseInt(e.target.value))}
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <button
                        onClick={() => dispatch(add(num))}
                        className='btn btn-primary'
                    >
                        Add
                    </button>
                    <button
                        onClick={() => dispatch(subtract(num))}
                        className='btn btn-primary'
                    >
                        Subtract
                    </button>
                    <button
                        onClick={() => dispatch(multiply(num))}
                        className='btn btn-primary'
                    >
                        Multiply
                    </button>
                    <button
                        onClick={() => dispatch(divide(num))}
                        className='btn btn-primary'
                    >
                        Divide
                    </button>
                </div>
            </div>
        </>
    );
};

export default Operations;
