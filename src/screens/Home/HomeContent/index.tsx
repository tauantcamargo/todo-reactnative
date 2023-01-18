import { View } from "react-native";
import { styles } from "../styles";
import HomeInputTodo from "../HomeInputTodo";
import HomeListTodo from "../HomeListTodo";

export default function HomeContent() {
  return (
    <View style={styles.content}>
      <HomeInputTodo />
      <HomeListTodo />
    </View>
  )
}