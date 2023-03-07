import { useState } from 'react';
import ContactFormCc from './components/ContactFormCc';
import ContactFormFc from './components/ContactFormFc';

function App() {
    const [flag, setFlag] = useState(false);

    return (
        <>
            <div className='container'>
                <h3 style={styles.heading}>Working with HTML form elements</h3>

                <div>
                    <button
                        onClick={() => setFlag(!flag)}
                        className='btn btn-primary'
                    >
                        Toggle form
                    </button>
                </div>

                {/* .row>.col*2>h5{this is h5 content} */}

                <div className='row'>
                    <div className='col'>
                        <h5>Class based component demo</h5>

                        {/* {flag && <ContactFormCc />} */}
                    </div>
                    <div className='col'>
                        <h5>Function based component demo</h5>
                        {flag && <ContactFormFc />}
                    </div>
                </div>
            </div>
        </>
    );
}

const styles = {
    heading: {
        color: 'darkred',
        fontSize: '3em',
    },
};

export default App;
