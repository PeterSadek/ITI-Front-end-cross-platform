import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
  search: {
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    padding: 5,
    fontSize: 20,
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  detailsContainer: {
    alignItems: "center",
    marginHorizontal: "auto",
    marginTop: 30,
    gap: 10,
  },
});
