import { StyleSheet } from "react-native";
import moderateScale from "../../../utils/responsiveScale";
import { Themes } from "@/app/utils/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(15),
  },
  scrollViewContainer: {
    flexGrow: 1,
    rowGap: moderateScale(10),
  },
  dayTextStyle: {
    fontWeight: 600,
    fontSize: moderateScale(30),
    textTransform: "capitalize",
    color: Themes.lightFadedGreen,
  },
  displayStack1: {
    flexDirection: "row",
  },
  periodTextStyle: {
    color: Themes.textColor,
    textAlign: "right",
    flex: 1,
  },
  holidayText: {
    color: Themes.textColor,
    fontSize: moderateScale(15),
    fontWeight: 600,
  },
});
