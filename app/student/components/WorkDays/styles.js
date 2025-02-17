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
  weekDayTextStyle: {
    justifyContent: "center",
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
