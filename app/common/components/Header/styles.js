import { StyleSheet } from "react-native";
import moderateScale from "../../../utils/responsiveScale";

export const styles = StyleSheet.create({
  container: {
    height: moderateScale(40),
    borderWidth: 0,
    borderBottomWidth: moderateScale(1),
    borderStyle: "solid",
    marginBottom: moderateScale(2),
  },
  titleTextStyle: {
    alignSelf: "center",
    fontWeight: 600,
    fontSize: moderateScale(16),
  },
});
