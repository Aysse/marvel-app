import { useEffect } from 'react';

const useApi = (url, dispatch, actionType) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: actionType, payload: data });
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
      }
    };

    fetchData();
  }, [url, dispatch, actionType]);
};

export default useApi;
