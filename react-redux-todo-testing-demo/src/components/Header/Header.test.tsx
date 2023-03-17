import Header from './Header';
import { render, screen } from '@testing-library/react';

it('should render the Header component', () => {
    render(<Header />);
    expect(screen.getByTestId('heading1')).toHaveTextContent('Todo app');
    expect(screen.getByTestId('para1')).toHaveTextContent('React and Redux');
});
