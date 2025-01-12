import { fetchData } from '../fetchData';

// Type-safe mock
jest.mock('../fetchData', () => ({
  fetchData: jest.fn() as jest.MockedFunction<typeof fetchData>,
}));

test('fetchData works with mocked response', async () => {
  // Mock implementation
  (fetchData as jest.MockedFunction<typeof fetchData>).mockResolvedValue('Mocked Data');

  const result = await fetchData('https://example.com');
  expect(result).toBe('Mocked Data');
  expect(fetchData).toHaveBeenCalledWith('https://example.com');
});
