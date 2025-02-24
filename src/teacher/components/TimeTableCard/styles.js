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
    rowGap: moderateScale(20),
  },
  classIdContainer: {
    height: moderateScale(70),
    backgroundColor: Themes.lightFadedGreen,
    justifyContent: "center",
    alignItems: "center",
  },
  classIdTextStyle: {
    fontSize: moderateScale(20),
    color: Themes.white,
  },
  statusContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    paddingRight: moderateScale(15),
    alignItems: "center",
  },
  statusTextStyle: {
    fontWeight: 600,
  },
  displayStack1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  displayStack2: {
    justifyContent: "center",
    alignItems: "center",
  },
});
