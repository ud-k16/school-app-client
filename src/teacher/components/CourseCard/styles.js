import { StyleSheet } from "react-native";
import moderateScale from "@/src/utils/responsiveScale";
import { Themes } from "@/src/utils/themes";
export const styles = StyleSheet.create({
  container: {},
  courseDatacontainer: {
    minHeight: moderateScale(30),
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  editContainer: {
    marginVertical: moderateScale(5),
    rowGap: moderateScale(15),
  },
  displayStack1: {
    justifyContent: "space-evenly",
    flex: 1,
  },
  displayStack2: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  textInputStyle: {
    alignSelf: "center",
    width: "90%",
    height: moderateScale(60),
    elevation: 6,
    backgroundColor: Themes.white,
    // borderWidth: moderateScale(2),
    borderRadius: moderateScale(5),
    paddingHorizontal: moderateScale(10),
    fontSize: moderateScale(17),
  },
  saveButton: {
    alignSelf: "center",
    width: moderateScale(100),
    height: moderateScale(40),
    borderRadius: moderateScale(5),
    alignItems: "center",
    justifyContent: "center",
    color: Themes.white,
    backgroundColor: Themes.secondary,
  },
});
