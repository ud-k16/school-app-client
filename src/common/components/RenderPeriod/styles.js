import moderateScale from "@/app/utils/responsiveScale";
import { Themes } from "@/app/utils/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  itemContainer: {
    width: "50%",
    flexGrow: "row",
    borderWidth: moderateScale(1),

    height: moderateScale(40),
    lineHeight: moderateScale(40),
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
