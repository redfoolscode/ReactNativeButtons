import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { useState } from "react";

export default function App() {
  const [theButton, setTheButton] = useState("");

  const buttonOnePressed = () => {
    setTheButton("Button one pressed");
  };

  const buttonTwoPressed = () => {
    setTheButton("Button two pressed");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.theText}>{theButton}</Text>
      <Button
        title="button one"
        color="purple"
        onPress={buttonOnePressed}
      ></Button>
      <Pressable
        onPress={buttonTwoPressed}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "rgba(130, 0, 166, 0.24)" : "purple" },
          { borderColor: pressed ? "rgba(0, 0, 0, 0.21)" : "black" },
          styles.customButton,
        ]}
      >
        <Text style={styles.customButtonText}>BUTTON TWO</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  theText: {
    margin: 30,
  },
  customButton: {
    borderWidth: 5,
    padding: 4,
    margin: 15,
    borderRadius: 15,
  },
  customButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 35,
  },
});
