import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <>
                <Header />
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <TodoForm />
                        </div>
                        <div className='col'>
                            <TodoList />
                        </div>
                    </div>
                </div>
            </>
        </Provider>
    );
}

export default App;
