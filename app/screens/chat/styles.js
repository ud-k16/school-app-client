import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  questionInputSectionContainer: {
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
  chatCardContainer: {
    rowGap: 10,
    width: "100%",
    paddingHorizontal: 5,
    marginVertical: 10,
  },
  questionContainer: {
    padding: 5,
    color: "white",
    borderRadius: 5,
    backgroundColor: "green",
    alignSelf: "flex-end",
    width: "50%",
  },
  answerContainer: {
    padding: 5,
    color: "white",
    borderRadius: 5,
    backgroundColor: "green",
    left: 0,
    width: "50%",
  },
});
