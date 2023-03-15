import React, { Component } from 'react';
import { withAuthetntication } from '../hoc/withAuthentication';

export class OrderHistory extends Component {
    render() {
        return <div>OrderHistory</div>;
    }
}

export default withAuthetntication(OrderHistory);
