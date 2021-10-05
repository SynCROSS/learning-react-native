import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  getKindOfWeathers,
  getClearDescription,
  getCloudsDescription,
  getRainDescription,
  getMistDescription,
  getDustDescription,
  getThunderStormDescription,
  getHazeDescription,
} from '../../lib/lists/weather.list';

// TODO 날씨에 따라 다른 스타일을 불러오도록 하기
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
  },
  clear: {
    backgroundColor: '#22aaff',
  },
  rain: {
    backgroundColor: '#111',
  },
  mist: {
    backgroundColor: '#bdbdbd',
    color: '#111',
  },
  dust: {
    backgroundColor: '#ffca00',
  },
  thunderstorm: {
    backgroundColor: '#200092',
  },
  haze: {
    backgroundColor: '#800080', // * purple
  },
});

const WeatherForm = ({ city, temp, weather, description }) => {
  return (
    <View
      style={[
        styles.container,
        (() => {
          if (weather === 'Clouds') return styles.clouds;
          if (weather === 'Clear') return styles.clear;
          if (weather === 'Rain') return styles.rain;
          if (weather === 'Mist') return styles.mist;
          if (weather === 'Dust') return styles.dust;
          if (weather === 'Thunderstorm') return styles.thunderstorm;
          if (weather === 'Haze') return styles.haze;
        })(),
      ]}
    >
      <Text>{city}</Text>
      <Text>{weather}</Text>
      <Text>{temp}˚C</Text>
      <Text>
        {() => {
          if (weather === 'Clouds')
            return getCloudsDescription().filter(d => d === description)[0];
          if (weather === 'Clear')
            return getClearDescription().filter(d => d === description)[0];
          if (weather === 'Rain')
            return getRainDescription().filter(d => d === description)[0];
          if (weather === 'Mist')
            return getMistDescription().filter(d => d === description)[0];
          if (weather === 'Dust')
            return getDustDescription().filter(d => d === description)[0];
          if (weather === 'Thunderstorm')
            return getThunderStormDescription().filter(
              d => d === description,
            )[0];
          if (weather === 'Haze')
            return getHazeDescription().filter(d => d === description)[0];
        }}
      </Text>
    </View>
  );
};

const Weather = ({ data }) => {
  if (!data?.name && !data?.main?.temp && !data?.weather[0])
    return <View style={styles.container} />;

  const city = data?.name;
  const temp = data?.main?.temp;
  const { main, description } = data?.weather[0];

  const weather = getKindOfWeathers().filter(w => main === w)[0];

  return (
    <View style={styles.container}>
      {city && temp && weather && description && (
        <WeatherForm
          city={city}
          temp={temp}
          weather={weather}
          description={description}
        />
      )}
      {(!city || !temp || !main || !description) && (
        <Text>Invalid Weather Data</Text>
      )}
    </View>
  );
};

export default Weather;
