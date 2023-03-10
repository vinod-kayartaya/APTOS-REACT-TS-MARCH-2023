import { Provider } from 'react-redux';
import Display from './components/Display';
import Header from './components/Header';
import Toolbar from './components/Toolbar';

import store from './redux/store';

function App() {
    return (
        <>
            <Provider store={store}>
                <Header />
                <Display />
                <Toolbar />
            </Provider>
        </>
    );
}

export default App;
