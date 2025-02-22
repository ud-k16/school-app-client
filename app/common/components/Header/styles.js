import { StyleSheet } from "react-native";
import moderateScale from "../../../utils/responsiveScale";
import { Themes } from "@/app/utils/themes";

export const styles = StyleSheet.create({
  container: {
    height: moderateScale(40),
    borderWidth: 0,
    borderBottomWidth: moderateScale(1),
    marginBottom: moderateScale(2),
    backgroundColor: Themes.secondary,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    minHeight: moderateScale(70),
  },
  titleTextStyle: {
    fontWeight: 600,
    fontSize: moderateScale(26),
    textTransform: "uppercase",
    flex: 0.8,
    color: Themes.white,
  },
  menuContainer: {
    color: Themes.textColor,
    backgroundColor: Themes.white,
    width: "50%",
    elevation: 16,
  },
});
