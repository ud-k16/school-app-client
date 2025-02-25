import moderateScale from "@/src/utils/responsiveScale";
import { Themes } from "@/src/utils/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: moderateScale(10),
  },
  scrollViewContainer: {
    flexGrow: 1,
    rowGap: moderateScale(10),
  },
  weekDayTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    minHeight: moderateScale(60),
    marginBottom: moderateScale(10),
  },
  weekDaysTextStyle: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: moderateScale(20),
    color: Themes.textColor,
    width: "100%",
  },
});
