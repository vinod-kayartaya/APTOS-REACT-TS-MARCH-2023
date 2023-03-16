import { Provider } from 'react-redux';
import CustomerList from './components/CustomerList';
import store from './redux/store';

function App() {
    return (
        <>
            <Provider store={store}>
                <div className='alert alert-primary'>
                    <div className='container'>
                        <h1>Redux saga demo app</h1>
                    </div>
                </div>

                <div className='container'>
                    <CustomerList />
                </div>
            </Provider>
        </>
    );
}

export default App;
