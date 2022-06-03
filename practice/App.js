import React, { useCallback, useState } from 'react';
import { Button, SafeAreaView } from 'react-native';
import Greeting from './components/Greeting';
import Box from './components/Box';

function App() {
  const [visibility, setVisibility] = useState(true);

  const onPress = useCallback(() => {
    setVisibility(v => !v);
  }, []);

  return (
    <SafeAreaView>
      <Button title={'Toggle visibility'} onPress={onPress} />
      {visibility && (
        <>
          <Greeting />
          <Box rounded size={'large'} backgroundColor={'#2FE58F'} />
        </>
      )}
    </SafeAreaView>
  );
}

export default App;
