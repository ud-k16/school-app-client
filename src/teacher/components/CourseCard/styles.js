import { StyleSheet } from "react-native";
import moderateScale from "@/src/utils/responsiveScale";
import { Themes } from "@/src/utils/themes";
export const styles = StyleSheet.create({
  container: {
    minHeight: moderateScale(30),
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  displayStack1: {
    justifyContent: "space-evenly",
    flex: 1,
  },
  displayStack2: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});
