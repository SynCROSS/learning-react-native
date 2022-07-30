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
  buttons: {
    flexDirection: 'row',
  },
});

function DetailScreen({ route, navigation }: ScreenProps<'Detail'>) {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>id: {route.params.id}</Text>
      <View style={styles.buttons}>
        <Button title="Prev" onPress={() => navigation.pop()} />
        <Button
          title="Next"
          onPress={() => navigation.push('Detail', { id: route.params.id + 1 })}
        />
        <Button title="Back To Top" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
}

export default DetailScreen;
