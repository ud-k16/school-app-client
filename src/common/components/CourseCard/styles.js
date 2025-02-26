import moderateScale from "@/src/utils/responsiveScale";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    minHeight: moderateScale(60),
    justifyContent: "space-evenly",
  },
  displayStack1: {
    flexDirection: "row",
  },
});
