import { useEffect } from 'react';

const useApiGetInitialData = (url, state, dispatch) => {
  useEffect(() => {
    const fetchData = async () => {
      if (state?.initialData.length > 0) return;
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
