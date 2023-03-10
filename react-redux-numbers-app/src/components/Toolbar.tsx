import { Component } from 'react';
import { connect } from 'react-redux';
import { DECREMENT, INCREMENT } from '../redux/types';

interface IToolbarProps {
    increment: () => void;
    decrement: () => void;
}

export class Toolbar extends Component<IToolbarProps> {
    render() {
        return (
            <>
                <div className='container'>
                    <button
                        onClick={this.props.increment}
                        className='btn btn-primary'
                    >
                        Increment
                    </button>
                    <button
                        onClick={this.props.decrement}
                        className='btn btn-primary'
                    >
                        Decrement
                    </button>
                </div>
            </>
        );
    }
}

const mapState = null;
const mapDispatch = {
    increment: () => ({ type: INCREMENT }),
    decrement: () => ({ type: DECREMENT }),
};

export default connect(mapState, mapDispatch)(Toolbar);
