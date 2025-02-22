import moderateScale from "@/app/utils/responsiveScale";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: moderateScale(15),
    rowGap: moderateScale(10),
  },
  displayStack1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  iconStyle: { width: "15%" },
  itemTextStyle: {
    fontWeight: 600,
    fontSize: 24,
    width: "50%",
  },
});
