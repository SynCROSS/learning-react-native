import {
  getForegroundPermissionsAsync,
  getLastKnownPositionAsync,
  requestForegroundPermissionsAsync,
} from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Loading from './components/loading/Loading';
import { API_KEY } from '@env';
import axios from 'axios';

export default function App() {
  // config();
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await getForegroundPermissionsAsync();

        if (status !== 'granted') {
          await requestForegroundPermissionsAsync();
        }

        const {
          coords: { latitude, longitude },
        } = await getLastKnownPositionAsync();

        if (!latitude || !longitude) return;

        const API_URL = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
        const { data } = await axios.get(API_URL);
        !!data && setIsLoading(false);
        setWeatherData(data);
        console.log(data);
      } catch (e) {
        const errorName = e instanceof Error ? e?.name?.toString?.() : '';
        const errorMessage = e instanceof Error ? e?.message?.toString?.() : '';

        Alert.alert(
          `Can't Get Your Location!`,
          `${errorName && errorMessage ? errorName + ': ' + errorMessage : ''}`,
          [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed'),
            },
          ],
        );
        console.error(e);
      }
    };
    getLocation();
  }, []);

  return isLoading ? <Loading /> : null;
}
