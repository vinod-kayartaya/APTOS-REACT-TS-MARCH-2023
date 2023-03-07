import ReactDOM from 'react-dom/client';
// import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import MovieApp from './components/MovieApp';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(<MovieApp />);
// root.render(<App />);
