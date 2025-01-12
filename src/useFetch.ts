import { useState, useEffect } from 'react';

export const useFetch = (url: string) => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setData);
  }, [url]);

  return data;
};
