import { Dimensions, StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  questionInputSectionContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: 60,
    borderStyle: "solid",
    borderWidth: 1,
  },
  textInputStyle: {
    width: "80%",
    height: "100%",
  },
});
