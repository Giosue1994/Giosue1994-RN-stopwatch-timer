import { StyleSheet, Text, View } from "react-native";

export default function Timer({ children }) {
  return (
    <View style={styles.timer}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    color: "#ffffff",
    fontSize: 60,
  },
});
