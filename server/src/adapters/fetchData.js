import axios from 'axios';

export async function fetchData (endpoint) {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
