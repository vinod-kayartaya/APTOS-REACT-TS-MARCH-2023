import { Provider } from 'react-redux';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';
import store from './redux/store';

function App() {
    return (
        <>
            <Provider store={store}>
                <Header />

                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            <Sidebar />
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
