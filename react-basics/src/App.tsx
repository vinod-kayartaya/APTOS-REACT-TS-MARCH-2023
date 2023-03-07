import { Component } from 'react';
import CounterCc from './components/CounterCc';
import Footer from './components/Footer';
import Header from './components/Header';
import NamesFc from './components/NamesFc';

export class App extends Component {
    render() {
        return (
            <>
                <Header
                    title='Hello from React'
                    subtitle='contact vinod@vinod.co'
                />
                <Header
                    title='React is awesome'
                    subtitle='After this example, we shall have a break!'
                />
                <div>
                    <CounterCc />
                    <hr />
                    <NamesFc />
                    <hr />
                </div>
                <Footer year={2022} company='KVinod Inc' />
                <Footer year={2023} company='Aptos Global' />
                <Footer />
            </>
        );
    }
}

export default App;
