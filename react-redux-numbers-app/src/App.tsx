import { Provider } from 'react-redux';
import Display from './components/Display';
import Header from './components/Header';
import Operations from './components/Operations';
import ShowState from './components/ShowState';
import Toolbar from './components/Toolbar';

import store from './redux/store';

function App() {
    return (
        <>
            <Provider store={store}>
                <Header />
                <Display />
                <Toolbar />
                <Operations />
                <ShowState />
            </Provider>
        </>
    );
}

export default App;
