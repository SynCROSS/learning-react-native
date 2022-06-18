import AsyncStorage from '@react-native-async-storage/async-storage';
import type { TODO } from '../../components/todos/TodoItem';

const isValidTodos = (todos: unknown): todos is TODO[] => {
  if (!Array.isArray(todos)) {
    globalThis.console.error("'todos' must be an array");
    return false;
  }

  if (
    todos.length > 0 &&
    todos.every(todo => 'id' in todo && 'text' in todo && 'isDone' in todo)
  ) {
    globalThis.console.error(
      "Element Of 'todos' must have 'id', 'text' and 'isDone' properties",
    );
    return false;
  }

  return true;
};

const getErrorMessage = (e: unknown) => {
  let message;

  if (typeof message !== 'object' || !e?.message) {
    message = '';
  } else {
    message = `: ${e.message}`;
  }

  return message;
};

export const getTodos = async (): Promise<TODO[]> => {
  try {
    const stringTodos = await AsyncStorage.getItem('todos');

    const parsedTodos = JSON.parse(`${stringTodos}`);

    if (!isValidTodos(parsedTodos)) {
      return [];
    }

    return parsedTodos;
  } catch (e) {
    const message = getErrorMessage(e);

    throw new Error(`Failed To Load Todos${message}`);
  }
};

export const saveTodos = async (todos: TODO[] | undefined) => {
  try {
    if (isValidTodos(todos)) {
      await AsyncStorage.setItem('todos', JSON.stringify(todos));
    }
  } catch (e) {
    const message = getErrorMessage(e);

    throw new Error(`Failed To Save Todos${message}`);
  }
};
