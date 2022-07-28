import React from 'react';
import { Button, View } from 'react-native';
import type { ScreenProps } from '../navigation/types';

type HomeScreenProps = ScreenProps<'Home'>;

function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View>
      <Button
        title="Open Details 1"
        onPress={() => navigation.push('Detail', { id: 1 })}
      />
      <Button
        title="Open Details 2"
        onPress={() => navigation.push('Detail', { id: 2 })}
      />
      <Button
        title="Open Details 3"
        onPress={() => navigation.push('Detail', { id: 3 })}
      />
    </View>
  );
}

export default HomeScreen;
