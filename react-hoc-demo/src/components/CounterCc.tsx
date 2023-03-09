import { Component } from 'react';
import withBorder from '../hoc/withBorder';

export class CounterCc extends Component {
    state = { count: 100 };

    increment() {
        this.setState({ count: this.state.count + 1 }, () =>
            console.log('this.state is', this.state)
        );
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 }); // executes only after the completion of decrement
        console.log('this.state is', this.state); // see this before the actual decrement and render
    };

    render() {
        console.log('CounterCc.render() called at', new Date());
        return (
            <>
                <h2>Value of count is {this.state.count}</h2>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.increment.bind(this)}>Increment</button>
            </>
        );
    }
}

export default withBorder('success')(CounterCc);
