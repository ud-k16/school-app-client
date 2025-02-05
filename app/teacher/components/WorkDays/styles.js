import moderateScale from "@/app/utils/responsiveScale";
import { Themes } from "@/app/utils/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10),
    rowGap: moderateScale(10),
  },
  scrollViewContainer: {
    flexGrow: 1,
    rowGap: moderateScale(10),
  },
  displayStack1: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,

    backgroundColor: Themes.white,
  },
  weekDaysTextStyle: {
    textTransform: "capitalize",
    fontWeight: 600,
    width: "50%",
    fontSize: moderateScale(30),
    color: Themes.lightFadedGreen,
  },
  displayStack2: {
    flexDirection: "row",
    width: "50%",

    alignItems: "center",
    justifyContent: "space-around",
  },

  checkBoxStyle: {
    alignItems: "center",
    borderWidth: moderateScale(3),
    width: moderateScale(28),
    height: moderateScale(28),
    borderRadius: moderateScale(5),
  },
  holidayTextStyle: {
    alignSelf: "flex-end",
    fontSize: moderateScale(25),
    color: Themes.secondary,
    fontWeight: 600,
  },
});
