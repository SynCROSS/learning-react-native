/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, useCallback, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import DateHeader from './components/common/DateHeader';
import AddTodo from './components/AddTodo';
import TodoList from './components/todos/TodoList';
import type { Todo } from './components/todos/TodoItem';
import { getTodos, saveTodos } from './storages/todo';

/**
 * Validate Parameter is Todo Object
 * @param {Todo} todo
 * @returns {todo is Todo} todo is Todo
 */
const isValidTodo = (todo: Todo): todo is Todo =>
  'id' in todo && 'text' in todo && 'isDone' in todo;

/**
 * Validate Parameter is Todo Array
 * @param {unknown} todos
 * @returns {todos is Todo[]} todos is Todo[]
 */
const isValidTodos = (todos: unknown): todos is Todo[] => {
  if (!Array.isArray(todos)) {
    globalThis.console.error("'todos' must be an array");
    return false;
  }

  if (todos.length > 0 && todos.every(isValidTodo)) {
    globalThis.console.error(
      "Element Of 'todos' must have 'id', 'text' and 'isDone' properties",
    );
    return false;
  }

  return true;
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#ffffff', // default background color is light gray
  },
});

function App() {
  const [todos, setTodos] = useState<Todo[]>();

  useEffect(() => {
    getTodos().then(setTodos).catch(globalThis.console.error);
  }, []);

  useEffect(() => {
    saveTodos(todos).catch(globalThis.console.error);
  }, [todos]);

  /**
   * Add a new Todo to the todos By Text
   * @param text New Todo's text
   */
  const onInsert = useCallback(
    (text: Todo['text']) => {
      const nextId =
        (Array.isArray(todos) && todos?.length > 0
          ? Math.max(...todos.map(({ id }) => id))
          : 0) + 1;

      const newTodo: Todo = {
        id: nextId,
        text,
        isDone: false,
      };

      setTodos(previousTodos =>
        Array.isArray(previousTodos)
          ? previousTodos.concat(newTodo)
          : [newTodo],
      );
    },
    [todos],
  );

  /**
   * Toggle Todo's isDone
   * @param {Todo['id']} id Todo's ID
   */
  const onToggle = useCallback(
    (id: Todo['id']) => {
      if (isValidTodos(todos)) {
        setTodos(previousTodos =>
          previousTodos?.map(todo =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
          ),
        );
      }
    },
    [todos],
  );

  const onRemove = useCallback(
    (id: Todo['id']) => {
      if (isValidTodos(todos)) {
        setTodos(previousTodos =>
          previousTodos?.filter(todo => todo?.id !== id),
        );
      }
    },
    [todos],
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={
            // Platform.OS === 'ios' ? 'padding' : undefined
            Platform.select({ ios: 'padding' })
          }
          style={styles.block}
        >
          <DateHeader />
          <TodoList
            todos={todos ?? []}
            onToggle={onToggle}
            onRemove={onRemove}
          />
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
