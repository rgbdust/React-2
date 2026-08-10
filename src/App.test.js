import { render, screen } from '@testing-library/react';
import App from './App';

test('renders yo supp text', () => {
  render(<App />);
  const textElement = screen.getByText(/Yo Supp!!/i);
  expect(textElement).toBeInTheDocument();
});
