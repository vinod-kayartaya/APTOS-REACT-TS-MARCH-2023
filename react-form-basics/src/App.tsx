import ContactFormCc from './components/ContactFormCc';

function App() {
    return (
        <>
            <div className='container'>
                <h3 style={styles.heading}>Working with HTML form elements</h3>

                {/* .row>.col*2>h5{this is h5 content} */}

                <div className='row'>
                    <div className='col'>
                        <h5>Class based component demo</h5>

                        <ContactFormCc />
                    </div>
                    <div className='col'>
                        <h5>Function based component demo</h5>
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
