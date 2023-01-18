import { StyleSheet, Text } from "react-native";

function Subtitle({ text }: { text: string }) {
  return (
    <Text style={styles.subtitle}>
      {text}
    </Text>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'normal',
  }
});

export {
  Subtitle
}