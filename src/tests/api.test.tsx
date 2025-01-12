jest.mock('../api', () => ({
  getUser: jest.fn(),
}));

import { getUser } from '../api';

test('getUser mock test', async () => {
  // Add type to the mocked function
  const mockGetUser = getUser as jest.MockedFunction<typeof getUser>;

  // Mock return value
  mockGetUser.mockResolvedValue({ id: '123', name: 'Mocked User' });

  const user = await getUser('123');
  expect(user.name).toBe('Mocked User');
  expect(mockGetUser).toHaveBeenCalledWith('123');
});
