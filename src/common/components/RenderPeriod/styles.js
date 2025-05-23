import moderateScale from "@/src/utils/responsiveScale";
import { Themes } from "@/src/utils/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  itemContainer: {
    width: "50%",
    flexGrow: "row",
    borderWidth: moderateScale(1),
    textAlign: "center",
    height: moderateScale(40),
    textAlignVertical: "center",
  },
  timeStyle: {
    backgroundColor: Themes.secondary,
    color: Themes.white,
  },
  subjectStyle: {
    backgroundColor: Themes.lightFadedGreen,
    color: Themes.textColor,
    fontWeight: 600,
  },
});
