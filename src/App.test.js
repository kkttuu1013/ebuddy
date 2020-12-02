import { render, screen } from '@testing-library/react';
import Ebudy from './Ebudy';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
