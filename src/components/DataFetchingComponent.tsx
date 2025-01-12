import React, { useState, useEffect } from "react";

const DataFetchingComponent: React.FC = () => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
          throw new Error("Failed to fetch data!");
        }
        const result = await response.json();
        setData(result.title);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show loading indicator
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  return <h1>Data: {data}</h1>;
};

export default DataFetchingComponent;
