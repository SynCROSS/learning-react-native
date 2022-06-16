import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { FOREST_GREEN_TRADITIONAL, SAGE, WHITE_SMOKE } from '../../lib/theme';

const SIZE = 24;
const BORDER_RADIUS = SIZE * 0.5;

const PADDING_SIZE = 16;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: PADDING_SIZE,
  },
  checkbox: {
    width: SIZE,
    height: SIZE,

    borderColor: SAGE,
    borderWidth: 1,
  },
  circle: {
    borderRadius: BORDER_RADIUS,
  },
  checked: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SAGE,
  },
  text: {
    flex: 1,
    fontSize: PADDING_SIZE,
    color: FOREST_GREEN_TRADITIONAL,
  },
  done: {
    color: WHITE_SMOKE,
    textDecorationLine: 'line-through',
  },
  removePlaceholder: {
    width: 32,
    height: 32,
  },
});

export type TODO = {
  id: number;
  text: string;
  isDone: boolean;
};

type TodoItemProps = TODO & {
  onToggle: (id: TODO['id']) => void;
  onRemove: (id: TODO['id']) => void;
};

function TodoItem({ id, text, isDone, onToggle, onRemove }: TodoItemProps) {
  const alertForRemove = () => {
    Alert.alert(
      'Delete TODO',
      'Are you sure you want to Delete this item?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            onRemove(id);
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(id)}>
        <View
          style={[
            styles.checkbox,
            styles.circle,
            {
              marginRight: PADDING_SIZE,
            },
            isDone && styles.checked,
          ]}
        >
          {isDone && (
            <Image
              source={require('../../assets/icons/check_white/check_white.png')}
            />
          )}
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, isDone && styles.done]}>{text}</Text>
      {isDone ? (
        <TouchableOpacity onPress={alertForRemove}>
          <FontAwesome5Icon name="trash" size={32} color="#ff1740" />
        </TouchableOpacity>
      ) : (
        <View style={styles.removePlaceholder} />
      )}
    </View>
  );
}

export default TodoItem;
