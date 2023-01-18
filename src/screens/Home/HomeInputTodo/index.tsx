import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";
import { useTodo } from "../../../hooks/useTodo";
import { useTodos } from "../../../hooks/useTodos";

export default function HomeInputTodo() {
  const { todo, handleTodo } = useTodo();
  const { addTodo } = useTodos();
  return (
    <View style={styles.inputGroup}>
      <TextInput
        style={styles.input}
        placeholder="Add a todo"
        value={todo}
        onChangeText={handleTodo}
        keyboardType="default"
      />
      <TouchableOpacity style={styles.button} onPress={() => {
        addTodo(String(todo))
        handleTodo('');
      }}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}