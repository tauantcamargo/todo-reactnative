import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTodos } from "../../../hooks/useTodos";
import { TodoItem } from "../../../components/TodoItem";
import { useState } from "react";

export default function HomeListTodo() {
  const { getTodos } = useTodos();
  const [filteredTodos, setFilteredTodos] = useState(getTodos('all'));

  return (
    <View>
      <View style={styles.filter}>
        <TouchableOpacity style={styles.filterCreated} onPress={() => setFilteredTodos(getTodos('created'))}>
          <Text style={styles.filterText}>Created - {getTodos('created')?.quantity}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterAll} onPress={() => setFilteredTodos(getTodos('all'))}>
          <Text style={styles.filterText}>All - {getTodos('all')?.quantity}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterDone} onPress={() => setFilteredTodos(getTodos('done'))}>
          <Text style={styles.filterText}>Done - {getTodos('done')?.quantity}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredTodos?.todos}
        keyExtractor={(item) => String(item?.id)}
        renderItem={({ item }) => (
          <TodoItem todo={item} />
        )}
        ListEmptyComponent={() => <Text style={styles.empty}>No todos yet</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  filter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
  },
  filterCreated: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 13,
    flexDirection: "row",
    width: "33%",
  },
  filterDone: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 13,
    width: "33%",
    flexDirection: "row",
  },
  filterAll: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 13,
    width: "33%",
    flexDirection: "row",
  },
  filterText: {
    flex: 1,
    fontSize: 13,
    color: "#000",
    fontWeight: "normal",
  },
  empty: {
    fontSize: 16,
    color: "#000",
    fontWeight: "normal",
    padding: 10,
    textAlign: "center"
  },
});
