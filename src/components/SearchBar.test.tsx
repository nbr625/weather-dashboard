import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('renders input and button', () => {
    render(<SearchBar onSearch={jest.fn()} />);

    expect(screen.getByPlaceholderText('Search city...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('calls onSearch with the correct city name', () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />);

    const input = screen.getByPlaceholderText('Search city...');
    fireEvent.change(input, { target: { value: 'London' } });
    fireEvent.click(screen.getByRole('button', { name: /search/i }));

    expect(onSearch).toHaveBeenCalledWith('London');
  });
});
