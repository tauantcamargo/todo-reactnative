import { Text, View } from "react-native";
import { styles } from "./styles";

type HeaderProps = {
  children: string | React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>{children}</Text>
    </View>
  );
}
