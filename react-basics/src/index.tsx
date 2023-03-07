import ReactDOM from 'react-dom/client';
import { App as MyApp } from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(<MyApp />);
