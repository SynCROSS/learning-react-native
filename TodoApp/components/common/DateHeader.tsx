import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GRAY_97, SAGE } from '../../lib/theme';

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: SAGE,
  },
  block: {
    padding: 16,
    backgroundColor: SAGE,
  },
  dateText: {
    fontSize: 24,
    color: GRAY_97,
  },
});

function DateHeader() {
  const { top } = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusBarPlaceholder, { height: top }]} />
      <StatusBar backgroundColor={SAGE} barStyle="light-content" />
      <View style={styles.block}>
        <Text style={styles.dateText}>{new Date().toLocaleDateString()}</Text>
      </View>
    </>
  );
}

export default DateHeader;
