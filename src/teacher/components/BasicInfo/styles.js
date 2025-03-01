import moderateScale from "@/src/utils/responsiveScale";
import { Themes } from "@/src/utils/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: moderateScale(19),
  },
  headingTextStyle: {
    color: Themes.textColor,
    fontSize: moderateScale(15),
    textAlign: "center",
  },
  infoStyle: {
    alignSelf: "center",
    width: "90%",
    height: moderateScale(60),
    backgroundColor: Themes.white,
    // elevation: 6,
    borderColor: Themes.greyShade,
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(2),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(5),
  },
  textStyle: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: moderateScale(16),
    color: Themes.greyShade,
  },
  infoHeaderText: {
    fontSize: moderateScale(10),
    color: Themes.secondary,
  },
});
