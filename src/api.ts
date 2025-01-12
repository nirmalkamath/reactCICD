export const getUser = async (id: string): Promise<{ id: string; name: string }> => {
  return { id, name: 'John Doe' };
};
