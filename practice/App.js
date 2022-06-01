import React from 'react';
import { SafeAreaView } from 'react-native';
import Greeting from './components/Greeting';
import Box from './components/Box';

function App() {
  return (
    <SafeAreaView>
      <Greeting />
      <Box rounded />
    </SafeAreaView>
  );
}

export default App;
