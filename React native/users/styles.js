import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "grey",
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  sectionHeader: {
    backgroundColor: "skyblue",
    padding: 10,
  },
  txt: {
    fontWeight: "bold",
  },
});
