import { StyleSheet } from "react-native";
import moderateScale from "@/src/utils/responsiveScale";
export const styles = StyleSheet.create({
  container: {
    height: moderateScale(30),
    flexDirection: "row",
  },
  displayStack1: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});
