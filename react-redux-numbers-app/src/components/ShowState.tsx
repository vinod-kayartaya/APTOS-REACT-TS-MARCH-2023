import { useSelector } from 'react-redux';
import { RootStoreType } from '../redux/store';

const ShowState = () => {
    const { num, decrementCount, incrementCount } = useSelector(
        (store: RootStoreType) => store.counterReducerState
    );

    return (
        <>
            <div className='container'>
                <p className='lead'>Number = {num}</p>
                <p className='lead'>Increment count = {incrementCount}</p>
                <p className='lead'>Decrement count = {decrementCount}</p>
            </div>
        </>
    );
};

export default ShowState;
