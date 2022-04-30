import React, { useRef } from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);

  const response = useRef(null);
  const json = useRef(null);

  const request = React.useCallback(async (url, options) => {
    try {
      setError(null);
      setData(null);
      setLoading(true);
      response.current = await fetch(url, options);
      json.current = await response.current.json();
      console.log(json.current)
      if (!response.current.ok) throw new Error(json.current.message);

    } catch (err) {
      json.current = null;
      setError(err.message);

    } finally { 
      setData(json);
      setLoading(false);
      return { response: response.current, json: json.current };
    }
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;
