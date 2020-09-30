import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
    padding: 10,
  },
  cards: {
    marginTop: 20,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonOpen: {
    backgroundColor: "#209587",
    padding: 10,
    borderRadius: 20,
  },
  buttonClose: {
    backgroundColor: "lightgray",
    marginLeft: 10,
    padding: 10,
    borderRadius: 20,
  },
  image: {
    width: 40,
    height: 40,
  },
  values: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "row",
  },
  valuesTexts: {
    paddingLeft: 10,
    flex: 1,
  },
  separator: {
    height: 0.5,
    width: "100%",
    backgroundColor: "lightgray",
  },
  total: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
});

export default styles;
