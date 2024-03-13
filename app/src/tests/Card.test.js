/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from '../components/Card/Card';
import { useStateValue } from '../context/apiContext';

jest.mock('../context/apiContext', () => ({
  useStateValue: jest.fn(() => [{}, () => {}]),
}));

describe('Card Component', () => {
  const mockCardProps = {
    src: String('http://example.com/image.jpg '),
    id: 1,
    name: 'Adam Warlock',
    image: { path: 'http://example.com', extension: 'jpg' },
    fav: false,
  };

  it('renders card correctly', () => {
    render(
      <MemoryRouter>
        <Card {...mockCardProps} />
      </MemoryRouter>
    );

    expect(screen.getByText('Adam Warlock')).toBeInTheDocument();
    expect(screen.getByAltText('Adam Warlock image')).toBeInTheDocument();
  });

//   it('renders favorite button correctly', () => {
//     render(
//       <MemoryRouter>
//         <Card {...mockCardProps} />
//       </MemoryRouter>
//     );

//     const favButton = screen.getByRole('button');
//     expect(favButton).toBeInTheDocument();
//   });
});