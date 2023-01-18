import { View } from "react-native";
import { styles } from "./styles";
import HomeTitle from "./HomeTitle";
import HomeContent from "./HomeContent";

export default function Home() {
  return (
    <View style={styles.container}>
      <HomeTitle  />
      <HomeContent />
    </View>
  );
}
