import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Button({ children, onPress, isRunning }) {
  return (
    <View
      style={[
        styles.buttonContainer,
        isRunning ? styles.borderStop : styles.borderStart,
      ]}
    >
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        android_ripple={{ color: isRunning ? "#fcaaaa" : "#aab3fc" }}
        onPress={onPress}
      >
        <View>
          <Text
            style={[
              styles.text,
              isRunning ? styles.textStop : styles.textStart,
            ]}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    overflow: "hidden",
    borderWidth: 15,
    borderColor: "#5e6efd",
    borderRadius: 300,
  },
  borderStart: {
    borderColor: "#5e6efd",
  },
  borderStop: {
    borderColor: "#fd5e5e",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 250,
  },

  text: {
    fontSize: 60,
  },
  textStart: {
    color: "#5e6efd",
  },
  textStop: {
    color: "#fd5e5e",
  },

  pressed: {
    opacity: 0.7,
  },
});
