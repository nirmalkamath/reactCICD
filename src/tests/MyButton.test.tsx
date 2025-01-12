import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyButton from '../Components/MyButton';

test('calls onClick when button is clicked', async () => {
  const mockOnClick = jest.fn();
  render(<MyButton label="Click Me" onClick={mockOnClick} />);
  await userEvent.click(screen.getByText('Click Me'));
  expect(mockOnClick).toHaveBeenCalledTimes(1);
});
