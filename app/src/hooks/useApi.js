import { useEffect } from 'react';

const useApi = ({ url, state, dispatch, type }) => {
  useEffect(() => {
    const fetchData = async () => {
      if (state?.initialData.length > 0) return;
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type, payload: data });
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
      }
    };

    fetchData();
  }, [url, dispatch]);
};

export default useApi;
