import { API_KEY } from '@env';
import axios from 'axios';

const BASE_API_URL = 'http://api.openweathermap.org/data/2.5/weather';
export const getCurrentWeatherByLatitudeAndLongitude = async (
  latitude: number,
  longitude: number,
) => {
  try {
    const { data } = await axios.get(
      BASE_API_URL +
        `?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
    );
    return data;
  } catch (e) {
    console.error(e);
  }
};
