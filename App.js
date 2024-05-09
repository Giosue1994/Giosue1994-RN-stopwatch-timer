import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import Timer from "./components/Timer";
import { useEffect, useState } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isTimerRunning) {
      intervalId = setInterval(() => setTimer(timer + 3), 10);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timer, isTimerRunning]);

  const hours = Math.floor(timer / 360000);
  const minutes = Math.floor((timer % 360000) / 6000);
  const seconds = Math.floor((timer % 6000) / 100);
  const milliseconds = timer % 100;

  function startStopHandler() {
    setIsTimerRunning(!isTimerRunning);
  }

  function resetHandler() {
    setTimer(0);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Timer>{`${hours}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`}</Timer>
      <Button isRunning={isTimerRunning} onPress={startStopHandler}>
        {isTimerRunning ? "Stop" : "Start"}
      </Button>

      <Pressable
        style={({ pressed }) => [styles.reset, pressed && styles.pressed]}
        onPress={resetHandler}
      >
        <Text style={styles.resetText}>Reset</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07121b",
    alignItems: "center",
    justifyContent: "center",
  },
  reset: {
    marginTop: 30,
    backgroundColor: "#fd5e5e",
    paddingHorizontal: 30,
    paddingVertical: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  pressed: {
    opacity: 0.7,
  },
  resetText: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
});
