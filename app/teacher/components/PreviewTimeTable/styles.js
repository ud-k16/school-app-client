import { StyleSheet } from "react-native";
import moderateScale from "../../../utils/responsiveScale";
import { Themes } from "@/app/utils/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    rowGap: moderateScale(10),
    paddingHorizontal: moderateScale(20),
  },
  dayTextStyle: {
    fontWeight: 600,
    fontSize: moderateScale(20),
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
  publishButtonStyle: {
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
  publishButtonTextStyle: {
    fontWeight: 600,
    fontSize: moderateScale(20),
    color: Themes.white,
  },
});
