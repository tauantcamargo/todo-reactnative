import { View } from "react-native";
import Header from "../../../components/Header";
import { Subtitle } from "../../../components/Subtitle";
import { styles } from "../styles";
import { useTodos } from "../../../hooks/useTodos";

export default function HomeTitle() {
  const { currentSizeTodos } = useTodos();
  
  return (
    <>
      <Header>Todo List</Header>
    </>
  )
}
