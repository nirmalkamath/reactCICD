jest.mock('../useFetch', () => ({
  useFetch: jest.fn(),
}));

import { useFetch } from '../useFetch';

test('useFetch returns mock data', () => {
  const mockUseFetch = useFetch as jest.MockedFunction<typeof useFetch>;

  // Mock return value
  mockUseFetch.mockReturnValue('Mocked Data');

  const result = mockUseFetch('https://example.com');
  expect(result).toBe('Mocked Data');
  expect(mockUseFetch).toHaveBeenCalledWith('https://example.com');
});
