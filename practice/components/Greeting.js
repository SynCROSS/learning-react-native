import React from 'react';
import { Text, View } from 'react-native';

function Greeting({ name }) {
  return (
    <View>
      <Text>Hello, {name}</Text>
    </View>
  );
}

Greeting.defaultProps = {
  name: 'Name',
};

export default Greeting;
