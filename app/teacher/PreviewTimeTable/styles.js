import { StyleSheet } from "react-native";
import moderateScale from "../../../src/utils/responsiveScale";
import { Themes } from "@/src/utils/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingHorizontal: moderateScale(10),
  },
  dayTextStyle: {
    fontWeight: 600,
    fontSize: moderateScale(16),
    textTransform: "uppercase",
    color: Themes.textColor,
    marginTop: moderateScale(10),
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
    color: Themes.secondary,
    fontSize: moderateScale(14),
    textTransform: "uppercase",
  },
  publishButtonStyle: {
    backgroundColor: Themes.secondary,
    borderRadius: moderateScale(5),
    marginTop: moderateScale(20),
    width: "50%",
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
  publishButtonTextStyle: {
    fontSize: moderateScale(16),
    color: Themes.white,
  },
});
