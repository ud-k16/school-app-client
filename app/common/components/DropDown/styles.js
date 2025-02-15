import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  dropDown: {
    borderRadius: 8,
    borderWidth: 1,

    minHeight: 50,

    justifyContent: "center",
    elevation: 5,
    backgroundColor: "white",
  },
  optionView: {
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#f0f7f4",
    elevation: 5,
  },
  optionContainer: {
    height: 50,

    justifyContent: "center",
  },
  textStyle: {
    color: "black",
    alignSelf: "center",
  },
  labelContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
