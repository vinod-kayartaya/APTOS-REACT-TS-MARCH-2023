import { Component } from 'react';
import { connect } from 'react-redux';
import { RootStoreType } from '../redux/store';

interface IDisplayProps {
    num: number;
}

export class Display extends Component<IDisplayProps> {
    render() {
        return (
            <>
                <div className='container'>
                    <p className='lead'>Value of number is {this.props.num}</p>
                </div>
            </>
        );
    }
}

// connect is a HOC that takes two parameters
// 1. what state you want in this component
// 2. what dispatchers you want in this component
const mapState = (store: RootStoreType) => {
    // store contains state of all reducers
    // we need to return an object consisting of data from the reducer's state
    return { num: store.counterReducerState.num };
};
const mapDispatch = {};

export default connect(mapState, mapDispatch)(Display);
