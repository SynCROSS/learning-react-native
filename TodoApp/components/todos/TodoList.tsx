import React from 'react';
import { Text, StyleSheet, View, Image, FlatList } from 'react-native';
import { WHITE_SMOKE } from '../../lib/theme';
import type { Todo } from './TodoItem';
import TodoItem from './TodoItem';

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
  description: {
    fontSize: 24,
    color: WHITE_SMOKE,
  },
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: WHITE_SMOKE,
    height: 1,
  },
});

function Empty() {
  /**
   * dp is density-independent pixel
   * ppi is pixel per inch
   *
   * dp = px * 160 / ppi
   * px = dp * ppi / 160
   *
   * resizeMode: https://reactnative.dev/docs/image#resizemode
   */

  return (
    <View style={styles.block}>
      <Image
        style={styles.image}
        source={require('../../assets/images/young_and_happy.png')}
        resizeMode="center"
      />
      <Text>There Is No Todo</Text>
    </View>
  );
}

function ItemSeparatorComponent() {
  return <View style={styles.separator} />;
}

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: Todo['id']) => void;
  onRemove: (id: Todo['id']) => void;
};

function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
  return !todos?.length ? (
    <Empty />
  ) : (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({ item: { id, text, isDone: done } }) => (
        <TodoItem
          id={id}
          text={text}
          isDone={done}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      )}
      keyExtractor={({ id }) => id.toString()}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
}

export default TodoList;
