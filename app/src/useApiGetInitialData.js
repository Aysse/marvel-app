import { useEffect } from 'react';

const useApiGetInitialData = (url, dispatch) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: 'SET_INITIAL_DATA', payload: data });
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
      }
    };

    fetchData();
  }, [url, dispatch]);
};

export default useApiGetInitialData;
