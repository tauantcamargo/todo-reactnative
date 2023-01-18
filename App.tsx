import {TodoProvider} from './src/hooks/useTodo';
import { TodosProvider } from './src/hooks/useTodos';
import Home from './src/screens/Home';

export default function App() {
  return (
    <>
      <TodosProvider>
        <TodoProvider>
          <Home /> 
        </TodoProvider>
      </TodosProvider>
    </>
  );
}
