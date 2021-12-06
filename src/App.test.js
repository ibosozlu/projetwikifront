import { render, screen } from '@testing-library/react';
import Accueil from "./component/accueil/Accueil";

test('renders learn react link', () => {
  render(<Accueil />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
