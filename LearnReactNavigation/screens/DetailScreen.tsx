import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ScreenProps } from '../navigation/types';

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
});

function DetailScreen({ route, navigation }: ScreenProps<'Detail'>) {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>id: {route.params.id}</Text>
      <Button
        title="Next"
        onPress={() => navigation.push('Detail', { id: route.params.id + 1 })}
      />
    </View>
  );
}

export default DetailScreen;
