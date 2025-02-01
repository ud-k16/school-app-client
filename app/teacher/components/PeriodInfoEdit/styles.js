import moderateScale from "@/app/utils/responsiveScale";
import { Themes } from "@/app/utils/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(5),
    rowGap: moderateScale(10),
    backgroundColor: Themes.white,
  },
  scrollViewContainer: {
    flexGrow: 1,
    rowGap: moderateScale(10),
  },
  textInputStyle: {
    alignSelf: "center",
    width: "90%",
    height: moderateScale(60),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(5),
    paddingHorizontal: moderateScale(10),
    fontSize: moderateScale(17),
  },
  dropdownPlaceHolderStyle: {
    fontSize: moderateScale(17),
    color: Themes.greyShade,
  },
  ORTextStyle: {
    fontSize: moderateScale(17),
    color: Themes.greyShade,
    alignSelf: "center",
  },
  displayStack1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
  },
  inputTitleTextStyle: {
    alignSelf: "center",
    fontWeight: 600,
    fontSize: moderateScale(30),
  },
  timeInput: {
    width: "45%",
  },
  saveButtonStyle: {
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
  saveButtonTextStyle: {
    fontWeight: 600,
    fontSize: moderateScale(20),
    color: Themes.white,
  },
});
