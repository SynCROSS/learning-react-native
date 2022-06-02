import React, { useCallback, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  numberArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 72,
    fontWeight: 'bold',
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
});

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrease = useCallback((): void => {
    setCount(previousCount => previousCount + 1);
  }, []);

  const onDecrease = useCallback((): void => {
    setCount(previousCount => previousCount - 1);
  }, []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.numberArea}>
        <Text style={styles.number}>{count}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <View style={styles.button}>
          <Button title="+1" onPress={onIncrease} />
        </View>
        <View style={styles.button}>
          <Button title="-1" onPress={onDecrease} />
        </View>
      </View>
    </View>
  );
};

export default Counter;
