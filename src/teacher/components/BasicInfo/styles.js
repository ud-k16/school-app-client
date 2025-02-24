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
  textInputStyle: {
    alignSelf: "center",
    width: "95%",
    height: moderateScale(60),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(5),
    paddingHorizontal: moderateScale(10),
  },
});
