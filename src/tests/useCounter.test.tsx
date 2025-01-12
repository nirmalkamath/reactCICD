import { renderHook, act } from '@testing-library/react';
import useCounter from '../Components/useCounter';

test('initializes with a count of 0', () => {
  const { result } = renderHook(() => useCounter());
  expect(result.current.count).toBe(0);
});

test('increments the count', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});

test('decrements the count', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.decrement();
  });

  expect(result.current.count).toBe(-1);
});
