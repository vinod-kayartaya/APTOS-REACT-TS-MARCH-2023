import { Provider } from 'react-redux';
import ContactDetails from './components/ContactDetails';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Header from './components/Header';
import store from './redux/store';

function App() {
    return (
        <>
            <Provider store={store}>
                <Header />
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <ContactList />
                        </div>
                        <div className='col'>
                            <ContactDetails />
                        </div>
                        <div className='col'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </Provider>
        </>
    );
}

export default App;
