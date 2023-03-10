import { Component } from 'react';
import { connect } from 'react-redux';
import { IStore } from '../redux/store';

interface IHeaderProps {
    incCount: number;
    decCount: number;
}
export class Header extends Component<IHeaderProps> {
    render() {
        const { incCount, decCount } = this.props;
        return (
            <>
                <div className='alert alert-primary'>
                    <div className='container'>
                        <h1>React Redux Example</h1>
                    </div>
                </div>
                <div className='container'>
                    You performed increment {incCount} times, decrement{' '}
                    {decCount} times.
                </div>
            </>
        );
    }
}

const mapState = (store: IStore) => ({
    incCount: store.counterReducerState.incrementCount,
    decCount: store.counterReducerState.decrementCount,
});
export default connect(mapState)(Header);
