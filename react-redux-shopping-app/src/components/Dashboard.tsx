import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withAuthetntication } from '../hoc/withAuthentication';
import { RootStoreType } from '../redux/store';

interface DashboardProps {
    loggedInUser: any;
}

export class Dashboard extends Component<DashboardProps> {
    render() {
        return (
            <>
                <div className='mt-3'>
                    <h5>Hello, {this.props.loggedInUser?.name}!</h5>
                </div>
            </>
        );
    }
}

const mapState = (store: RootStoreType) => ({
    loggedInUser: store.authReducerState.loggedInUser,
});

const mapDispatch = {};
export default connect(mapState, mapDispatch)(withAuthetntication(Dashboard));
