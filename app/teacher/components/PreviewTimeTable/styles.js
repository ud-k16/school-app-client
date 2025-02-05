import { StyleSheet } from "react-native";
import moderateScale from "../../../utils/responsiveScale";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: moderateScale(15),
  },
  scrollViewContainer: {
    flexGrow: 1,
    rowGap: moderateScale(10),
  },
});
