import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  },
  loadingText: {
    fontSize: 20,
  },
});

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Loading . . . </Text>
    </View>
  );
};

export default Loading;
