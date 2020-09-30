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
    flexDirection: "row",
  },
  graphic: {
    flex: 1,
  },
  data: {
    flex: 2,
    paddingLeft: 20,
  },
  dataValues: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  circle: {
    width: 15,
    height: 15,
    backgroundColor: "blue",
    borderRadius: 10,
  },
});

export default styles;
