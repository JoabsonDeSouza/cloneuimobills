import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
    padding: 10,
  },
  cards: {
    marginTop: 20,
    width: width - 100,
    marginRight: 14,
    backgroundColor: "white",
    borderRadius: 12,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 12,
  },
  containerTexts: {
    width: "100%",
    height: "50%",
    padding: 10,
    position: "absolute",
    borderRadius: 12,
    bottom: 0,
    backgroundColor: "white",
  },
  texts: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flex: 1,
  },
});

export default styles;
