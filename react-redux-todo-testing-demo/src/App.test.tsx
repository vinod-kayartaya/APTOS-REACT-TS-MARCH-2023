import { render, screen } from '@testing-library/react';
import App from './App';

// test suite
describe('App tests', () => {
    // test case
    it('should render the App component', () => {
        render(<App />);
        const elem = screen.getByText(/todo app/i);
        expect(elem).toBeInTheDocument();

        expect(
            screen.getByText('Powered with React and Redux')
        ).toBeInTheDocument();
        // check the presense of a TODO task
        expect(screen.getByText('Create components')).toBeInTheDocument();
    });
});
