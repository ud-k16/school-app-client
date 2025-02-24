import { StyleSheet } from "react-native";
import moderateScale from "@/src/utils/responsiveScale";
import { Themes } from "@/src/utils/themes";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    height: moderateScale(200),
    borderRadius: moderateScale(5),
    elevation: 5,
    backgroundColor: Themes.white,
  },
});
