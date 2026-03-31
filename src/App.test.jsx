import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the refreshed Orbit hero heading', () => {
  render(<App />);
  expect(
    screen.getByText(/Orbit is ready for a sharper, premium electric brand presence/i)
  ).toBeInTheDocument();
});
