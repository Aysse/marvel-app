
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card/Card';
import { ApiProvider } from '../context/apiContext';
import { BrowserRouter } from 'react-router-dom';

describe('Card Component', () => {
    const mockCardProps = {
        src: { path: String('http://example.com/image.jpg '), extension: 'jpg' },
        id: 1,
        name: 'Adam Warlock',
        image: { path: 'http://example.com', extension: 'jpg' },
        fav: false,
    };

    it('renders card correctly', () => {

        const mockContextValue = {
            state: {},
            dispatch: vi.fn(),
        };

        render(
            <BrowserRouter>
                <ApiProvider value={mockContextValue}>
                    <Card id={mockCardProps.id} name={mockCardProps.name} image={mockCardProps.image} fav={mockCardProps.fav} />
                </ApiProvider>
            </BrowserRouter>
        );
        const card = screen.getByText(/Adam Warlock/i);

        expect(card).toBeInTheDocument();
        expect(screen.getByAltText(/Adam Warlock image/i)).toBeInTheDocument();
    });
    it('renders favorite button correctly', () => {

        const mockContextValue = {
            state: {},
            dispatch: vi.fn(),
        };
    
        render(
            <BrowserRouter>
                <ApiProvider value={mockContextValue}>
                    <Card id={mockCardProps.id} name={mockCardProps.name} image={mockCardProps.image} fav={mockCardProps.fav} />
                </ApiProvider>
            </BrowserRouter>
        );
        const favButton = screen.getByRole('button');
        expect(favButton).toBeInTheDocument();
    });

});
