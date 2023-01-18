import React, { Dispatch, SetStateAction, createContext, useContext, useMemo, useState } from 'react';
import { useTodo } from './useTodo';
import { Alert } from 'react-native';

interface TodoData {
  id: number;
  title: string;
  done?: boolean;
}

interface TodosData {
  getTodos: (filter: string) => {
    todos: TodoData[];
    quantity: number;
  };
  setTodos?: Dispatch<SetStateAction<TodoData[]>>;
  addTodo: (value: string) => void;
  removeTodo: (todoId: number) => void;
  doneTodo: (todoId: number) => void;
  currentSizeTodos: number;
  doneTodos: number;
};

const TodosContext = createContext<TodosData | null>(null);

function TodosProvider({ children }: { children: React.ReactNode}) {
  const [todos, setTodos] = useState<TodoData[]>([] as TodoData[]);
  const currentSizeTodos = todos?.length;

  function addTodo(newTodo: string) {
    if (!newTodo) return Alert.alert('Todo is empty', 'You need to fill todo to add one!');
    if (todos?.find((item) => item.title === newTodo)) return Alert.alert('Todo already exists', 'Todo already exists');
    setTodos([...todos, { id: todos.length + 1, title: newTodo }]);
  }

  function removeTodo(todoId: number): void {
    return Alert.alert('Remove Todo', "Do you want to delete", [
      {
        text: 'Yes',
        style: 'default',
        onPress: () => {
          const newTodos = todos?.filter((todoItem) => todoItem?.id !== todoId);
          setTodos(newTodos);
          Alert.alert('Todo removed', 'Todo removed successfully') 
        }
      },
      {
        text: 'No',
        style: 'cancel'
      }
    ]);
  }

  function doneTodo(todoId: number): void {
    const newTodos = todos?.map((todo) => {
      if (todo?.id === todoId) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function filterByDone(): TodoData[] {
    const newTodos = todos?.filter((todo) => todo?.done);
    return newTodos;
  }

  function getTodos(filter: string): {
    todos: TodoData[];
    quantity: number;
  } {
    if (filter === 'done') {
      return {
        todos: filterByDone(),
        quantity: filterByDone()?.length,
      };
    }
    if (filter === 'created') {
      const createdTodos = todos?.filter((todo) => !todo?.done)
      return {
        todos: todos?.filter((todo) => !todo?.done),
        quantity: createdTodos?.length,
      };
    }
    return {
      todos,
      quantity: todos?.length,
    };
  }

  const value = useMemo(() => ({
    getTodos,
    addTodo,
    removeTodo,
    doneTodo,
    currentSizeTodos,
    doneTodos: filterByDone()?.length,
  }), [getTodos, addTodo, currentSizeTodos, removeTodo, doneTodo]);

  return (
    <TodosContext.Provider value={value}>
      {children}
    </TodosContext.Provider>
  );
}

function useTodos(): TodosData {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error('useTodos must be used within a TodosProvider');
  }

  return context;
}

export {
  TodosProvider,
  useTodos
}