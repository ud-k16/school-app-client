import moderateScale from "@/src/utils/responsiveScale";
import { Themes } from "@/src/utils/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10),
    rowGap: moderateScale(10),
  },

  headingTextStyle: {
    color: Themes.textColor,
    fontSize: moderateScale(15),
    textAlign: "center",
  },
  displayStack1: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    minHeight: moderateScale(50),
    // backgroundColor: Themes.white,
  },
  weekDaysTextStyle: {
    textTransform: "uppercase",
    fontWeight: 600,
    width: "50%",
    fontSize: moderateScale(20),
    color: Themes.textColor,
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
    paddingRight: moderateScale(10),
    fontSize: moderateScale(15),
    color: Themes.secondary,
    fontWeight: 600,
    textTransform: "uppercase",
  },
  previewButtonStyle: {
    backgroundColor: Themes.secondary,
    borderRadius: moderateScale(5),
    marginTop: moderateScale(20),
    width: "60%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: moderateScale(50),
    elevation: 6,
    shadowColor: Themes.greyShade,
    shadowOffset: moderateScale(15),
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  previewButtonTextStyle: {
    fontWeight: 600,
    fontSize: moderateScale(20),
    color: Themes.white,
  },
});
