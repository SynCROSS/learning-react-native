import {
  getForegroundPermissionsAsync,
  getLastKnownPositionAsync,
  requestForegroundPermissionsAsync,
} from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Loading from './components/Loading';
import Weather from './containers/weathers/Weather';
import { getCurrentWeatherByLatitudeAndLongitude } from './lib/api/getWeatherData';

export default function App() {
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

        const data = await getCurrentWeatherByLatitudeAndLongitude(
          latitude,
          longitude,
        );
        setWeatherData(() => data);
        // console.log(weatherData);

        setIsLoading(false);
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

  return isLoading ? <Loading /> : <Weather data={weatherData} />;
}
