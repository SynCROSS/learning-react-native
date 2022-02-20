import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import { getKindOfWeathers } from '../../lib/lists/weather.list';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  clouds: {
    backgroundColor: '#eee',
    color: '#111',
  },
  clear: {
    backgroundColor: '#22aaff',
    color: '#eee',
  },
  rain: {
    backgroundColor: '#111',
    color: '#eee',
  },
  mist: {
    backgroundColor: '#bdbdbd',
    color: '#111',
  },
  dust: {
    backgroundColor: '#ffca00',
    color: '#eee',
  },
  thunderstorm: {
    backgroundColor: '#200092',
    color: '#dfff6d',
  },
  haze: {
    backgroundColor: '#800080', // * purple
    color: '#eee',
  },
});

type Style = ViewStyle | TextStyle | ImageStyle;

const getStyleByWeather = (weather: string) => {
  const weatherMap: Record<string, Style> = {
    Clouds: styles.clouds,
    Clear: styles.clear,
    Rain: styles.rain,
    Mist: styles.mist,
    Dust: styles.dust,
    Thunderstorm: styles.thunderstorm,
    Haze: styles.haze,
  };

  return weatherMap?.[weather];
};

const WeatherForm = ({
  city = 'Unknown',
  temp = NaN,
  weather = '',
  description = 'Unknown',
}) => (
  <View style={[styles.container, getStyleByWeather(weather)]}>
    <Text style={getStyleByWeather(weather)}>{city}</Text>
    <Text style={getStyleByWeather(weather)}>{weather}</Text>
    <Text style={getStyleByWeather(weather)}>{temp}˚C</Text>
    <Text style={getStyleByWeather(weather)}>{description}</Text>
  </View>
);

const Weather = ({ data }) => {
  if (!data?.name && !data?.main?.temp && !data?.weather[0])
    return <View style={styles.container} />;

  const city = data?.name;
  const temp = data?.main?.temp;
  const { main, description } = data?.weather[0];

  const weather = getKindOfWeathers().filter(w => main === w)[0];

  const capitalize = (description: string) =>
    description
      ?.split?.(' ')
      ?.map?.(
        ([firstLetter, ...restLetters]) =>
          firstLetter?.toUpperCase?.() + restLetters?.join?.(''),
      )
      ?.join?.(' ');

  return (
    <View style={styles.container}>
      {(!city || !temp || !weather || !description) && (
        <View style={[styles.container]}>
          <Text>Oops! This App Can Not Get Your Weather Info.</Text>
        </View>
      )}
      {city && temp && weather && description && (
        <WeatherForm
          city={city}
          temp={temp}
          weather={weather}
          description={capitalize(description)}
        />
      )}
    </View>
  );
};

export default Weather;
