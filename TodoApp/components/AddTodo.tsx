import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';
import type { TouchableWithoutFeedbackProps } from 'react-native';
import { SAGE, WHITE_SMOKE } from '../lib/theme';

const SIZE = 48;

const BORDER_RADIUS = SIZE * 0.5;

const styles = StyleSheet.create({
  block: {
    height: 64,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  bordered: {
    borderColor: WHITE_SMOKE,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE,
    height: SIZE,
    backgroundColor: SAGE,
    borderRadius: BORDER_RADIUS,
  },
  circleWrapper: {
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
  },
});

function ButtonWrapper({ children, onPress }: TouchableWithoutFeedbackProps) {
  return (
    Platform.select({
      ios: (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
          {children}
        </TouchableOpacity>
      ),
      android: (
        <View style={styles.circleWrapper}>
          <TouchableNativeFeedback onPress={onPress}>
            {children}
          </TouchableNativeFeedback>
        </View>
      ),
    }) ?? null
  );
}

type AddTodoProps = {
  onInsert: (text: string) => void;
};

function AddTodo({ onInsert }: AddTodoProps) {
  const [text, setText] = useState('');

  const onChangeText = useCallback(changedText => {
    setText(changedText);
  }, []);

  const onPress = useCallback(() => {
    onInsert(text);
    setText('');
    Keyboard.dismiss();
  }, [onInsert, text]);

  return (
    <View style={[styles.block, styles.bordered]}>
      <TextInput
        placeholder="Enter Todo"
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      <ButtonWrapper onPress={onPress}>
        <View style={styles.addButton}>
          <Image source={require('../assets/icons/add_white/add_white.png')} />
        </View>
      </ButtonWrapper>
    </View>
  );
}

export default AddTodo;
