import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-windows';

function Box({ rounded }) {
  return <View style={[styles.box, rounded && styles.rounded]} />;
}

const width = 64;
const height = 64;

const borderRadius = width / 4;

const styles = StyleSheet.create({
  box: {
    width,
    height,
    backgroundColor: '#ff1740',
  },
  rounded: {
    borderRadius,
  },
});

export default Box;
