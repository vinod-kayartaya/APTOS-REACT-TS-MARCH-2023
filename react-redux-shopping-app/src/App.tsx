import { Provider } from 'react-redux';
import Header from './components/Header';
import ProductList from './components/ProductList';
import store from './redux/store';

function App() {
    return (
        <>
            <Provider store={store}>
                <Header />

                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            <h3>Sidebar will appear here</h3>
                        </div>
                        <div className='col-9'>
                            <ProductList />
                        </div>
                    </div>
                </div>
            </Provider>
        </>
    );
}

export default App;