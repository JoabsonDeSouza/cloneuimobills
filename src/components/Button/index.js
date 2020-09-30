import React from "react";
import { StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Button = () => {
  return (
    <View style={styles.container}>
      <Entypo name="plus" size={30} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#1C8BEB",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});

export default Button;
