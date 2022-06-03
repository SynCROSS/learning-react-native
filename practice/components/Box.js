import React from 'react';
import { View, StyleSheet } from 'react-native';

const DEFAULT_SIZE = 'medium';

const DEFAULT_BACKGROUND_COLOR = '#ff1740';
function Box({
  rounded,
  size = DEFAULT_SIZE,
  backgroundColor = DEFAULT_BACKGROUND_COLOR,
}) {
  return (
    <View
      style={[
        styles.box,
        rounded && styles.rounded,
        sizes[size],
        { backgroundColor },
      ]}
    />
  );
}

const width = 64;
const height = 64;

const styles = StyleSheet.create({
  box: {
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
  },
  rounded: {
    borderRadius: (width || height) / 4,
  },
  small: {
    width: width / 2,
    height: height / 2,
  },
  medium: {
    width,
    height,
  },
  large: {
    width: width * 2,
    height: height * 2,
  },
});

const sizes = {
  small: styles?.small,
  medium: styles?.medium,
  large: styles?.large,
};

Box.defaultProps = {
  size: DEFAULT_SIZE,
  backgroundColor: DEFAULT_BACKGROUND_COLOR,
};

export default Box;
