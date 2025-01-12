export const fetchData = async (url: string): Promise<string> => {
  const response = await fetch(url);
  return response.text();
};