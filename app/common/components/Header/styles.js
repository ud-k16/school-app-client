import { StyleSheet } from "react-native";
import moderateScale from "../../../utils/responsiveScale";
import { Themes } from "@/app/utils/themes";

export const styles = StyleSheet.create({
  container: {
    height: moderateScale(40),
    borderWidth: 0,
    borderBottomWidth: moderateScale(1),
    marginBottom: moderateScale(2),
    backgroundColor: Themes.white,
    alignItems: "center",
  },
  titleTextStyle: {
    alignSelf: "center",
    fontWeight: 600,
    fontSize: moderateScale(26),
  },
});
