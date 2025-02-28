import { StyleSheet } from "react-native";
import moderateScale from "@/src/utils/responsiveScale";
import { Themes } from "@/src/utils/themes";
export const styles = StyleSheet.create({
  container: {
    height: moderateScale(30),
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
  },
  displayStack1: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});
