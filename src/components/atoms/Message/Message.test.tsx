import { screen, render } from '@testing-library/react';
import Message from './Message';

describe('Message component', () => {
  it('shows loader when data is loading', () => {
    const msg = {
      loading: true,
      error: false,
      content: null,
    };
    render(<Message msg={msg} />);

    const box = screen.getByText(/loading.../i);
    expect(box).toBeInTheDocument();
  });

  it('shows message if there is one', () => {
    const msg = {
      loading: false,
      error: false,
      content: 'Message content',
    };

    render(<Message msg={msg} />);
    const box = screen.getByText(/message content/i);
    expect(box).toBeInTheDocument();
  });
});
