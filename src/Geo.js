import axios from 'axios';

const GEO_API_URL = 'https://ipapi.co/json/'; // ipapi URL

export const getUserLocation = async () => {
  try {
    // return {country : 'IN'}
    const response = await axios.get(GEO_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching location data:', error);
    return null;
  }
};