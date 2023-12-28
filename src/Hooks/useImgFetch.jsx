import { useEffect, useState } from 'react';

const useImgFetch = (url, method, headers) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const requestFetch = async () => {
      try {
        setLoading(true);
        setError(false);
        const responce = await fetch(url, {
          method: method || 'GET',
          headers: headers,
        });
        const data = await responce.json();
        setLoading(false);
        setResult(data);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };
    requestFetch();
  }, []);
  return {
    loading,
    error,
    result,
  };
};

export default useImgFetch;
