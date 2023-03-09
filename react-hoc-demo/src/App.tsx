import CounterCc from './components/CounterCc';
import Authenticate from './components/Authenticate';
import Greetings from './components/Greetings';
import ProductList from './components/ProductList';
import TodoList from './components/TodoList';

function App() {
    return (
        <>
            <div className='container'>
                <h1>Higher Order Components</h1>
                <hr />

                <Authenticate>
                    <Greetings />
                    <CounterCc />
                    <ProductList />
                </Authenticate>
                <TodoList />
            </div>
        </>
    );
}

export default App;
