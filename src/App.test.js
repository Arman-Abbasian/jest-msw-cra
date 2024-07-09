import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
describe('App tests', () => {
  it('should contains the heading 1', () => {
  render(<App />);
      const heading = screen.getByText(/Hello world! I am using React/i);
      expect(heading).toBeInTheDocument()
  });
});
