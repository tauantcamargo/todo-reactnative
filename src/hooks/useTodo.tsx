import { Dispatch, SetStateAction, createContext, useContext, useMemo, useState } from "react"

interface TodoData {
  todo?: string;
  setTodo?: Dispatch<SetStateAction<string>>;
  handleTodo: (value: string) => void;
}

const TodoContext = createContext<TodoData | null>(null);

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todo, setTodo] = useState('');

  function handleTodo(value?: string) {
    setTodo(String(value));
  }

  const value = useMemo(() => ({ todo, setTodo, handleTodo }), [todo, setTodo, handleTodo]);

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

const useTodo = (): TodoData => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
}

export {
  TodoProvider,
  useTodo
}