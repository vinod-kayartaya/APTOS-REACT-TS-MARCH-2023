import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartItems from './components/CartItems';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import LoginForm from './components/LoginForm';
import OrderHistory from './components/OrderHistory';
import ProductList from './components/ProductList';

import store from './redux/store';

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route path='' element={<ProductList />} />
                            <Route path='products' element={<ProductList />} />
                            <Route path='cart-items' element={<CartItems />} />
                            <Route
                                path='products-by-brand/:brand'
                                element={<ProductList />}
                            />
                            <Route
                                path='products-by-category/:category'
                                element={<ProductList />}
                            />

                            <Route path='dashboard' element={<Dashboard />} />
                            <Route
                                path='order-history'
                                element={<OrderHistory />}
                            />
                            <Route path='login' element={<LoginForm />} />

                            <Route
                                path='*'
                                element={
                                    <h3 className='text-danger'>
                                        Page not found!
                                    </h3>
                                }
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
