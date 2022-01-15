import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
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

const getStyleByWeather = (weather: string) => {
  if (!weather) return;

  switch (weather) {
    case 'Clouds':
      return styles.clouds;
    case 'Clear':
      return styles.clear;
    case 'Rain':
      return styles.rain;
    case 'Mist':
      return styles.mist;
    case 'Dust':
      return styles.dust;
    case 'Thunderstorm':
      return styles.thunderstorm;
    case 'Haze':
      return styles.haze;
  }
};

const WeatherForm = ({ city, temp, weather, description }) => (
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

  const capitalize = (description: string) => {
    let capitalizedDescription = '';

    for (const d of description.split(' ')) {
      capitalizedDescription +=
        d.substr(0, 1).toUpperCase() + d.substr(1) + ' ';
    }

    return capitalizedDescription;
  };

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