import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardMain: {
    width: "100%",
    height: 250,
    backgroundColor: "#fff",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  dataIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    minHeight: 40,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  dataBalance: {
    width: "100%",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  dataValues: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
  },
});

export default styles;
