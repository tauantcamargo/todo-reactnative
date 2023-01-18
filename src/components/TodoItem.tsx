import { StyleSheet, Text, TouchableOpacity, View, Switch } from "react-native";
import { useTodos } from "../hooks/useTodos";

type Todo = {
  id: number;
  title: string;
  done?: boolean;
};

type TodoItemProps = {
  todo?: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const { removeTodo, doneTodo } = useTodos();

  return (
    <View style={styles.todoContainer}>
       <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={todo?.done ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => doneTodo(Number(todo?.id))}
          value={todo?.done}
        />

      <Text style={styles.todo}>{todo?.title}</Text>

      <TouchableOpacity style={styles.button} onPress={() => removeTodo(Number(todo?.id))}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%'
  },
  todo: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    fontWeight: 'normal',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    padding: 16,
    borderRadius: 8,
    width: 50
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export {
  TodoItem
}