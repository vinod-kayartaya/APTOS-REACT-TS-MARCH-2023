import { Component } from 'react';
import withBorder from '../hoc/withBorder';

export class Greetings extends Component {
    render() {
        return (
            <>
                <h3>Hello, friends!</h3>
            </>
        );
    }
}

export default withBorder('primary')(withBorder('warning')(Greetings));
