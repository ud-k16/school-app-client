import moderateScale from "@/app/utils/responsiveScale";
import { Themes } from "@/app/utils/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(5),
    rowGap: moderateScale(10),
  },
  weekDayTextStyle: {
    fontWeight: 600,
    alignSelf: "center",
    height: moderateScale(50),
    fontSize: moderateScale(40),
    color: Themes.secondary,
  },
  textInputStyle: {
    alignSelf: "center",
    width: "90%",
    height: moderateScale(60),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(5),
    paddingHorizontal: moderateScale(10),
  },
  addButtonStyle: {
    backgroundColor: Themes.white,
    borderRadius: moderateScale(5),
    width: "60%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: moderateScale(50),
    elevation: 6,
    shadowColor: Themes.greyShade,
    shadowOffset: moderateScale(15),
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  addButtonTextStyle: {
    fontWeight: 600,
    fontSize: moderateScale(20),
  },
});
