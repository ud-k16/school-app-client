import moderateScale from "@/src/utils/responsiveScale";
import { Themes } from "@/src/utils/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(15),
    rowGap: moderateScale(10),
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  weekDayTextStyle: {
    fontWeight: 600,
    alignSelf: "center",
    height: "auto",
    fontSize: moderateScale(20),
    color: Themes.secondary,
    textTransform: "uppercase",
  },
  displayStack1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  addButtonStyle: {
    backgroundColor: Themes.white,
    borderRadius: moderateScale(5),
    width: "30%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: moderateScale(40),
    elevation: 6,
    shadowColor: Themes.greyShade,
    shadowOffset: moderateScale(15),
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  addButtonTextStyle: {
    fontWeight: 600,
    fontSize: moderateScale(15),
  },
  periodDisplayCardContainer: {
    marginBottom: moderateScale(10),
    alignSelf: "center",
    width: "99%",
    minHeight: moderateScale(60),
    flexDirection: "row",
    alignItems: "center",
    borderWidth: moderateScale(1),
    borderColor: Themes.greyShade,
    paddingHorizontal: moderateScale(10),
  },
  periodTextStyle: {
    color: Themes.textColor,
    fontSize: moderateScale(16),
  },
  subjectTextStyle: {
    color: Themes.secondary,
    fontSize: moderateScale(18),
    textTransform: "uppercase",
  },
  arrowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  displayStackData: {
    flex: 1,
  },
});
