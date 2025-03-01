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
    backgroundColor: Themes.white,
    marginVertical: moderateScale(5),
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    elevation: 6,
  },
  editContainer: {
    marginVertical: moderateScale(5),
    rowGap: moderateScale(15),
  },
  displayStack1: {
    justifyContent: "space-evenly",
    flex: 2,
  },
  displayStack2: {
    flexDirection: "row",
  },
  displayStack3: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
  },
  teacherTextStyle: {
    color: Themes.lightFadedGreen,
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
  subjectTextStyle: {
    fontWeight: 600,
    fontSize: moderateScale(20),
  },
  descriptionTextStyle: {
    color: Themes.greyShade,
  },
  actionButton: {
    alignSelf: "center",
    width: moderateScale(100),
    height: moderateScale(40),
    borderRadius: moderateScale(5),
    alignItems: "center",
    justifyContent: "center",
    color: Themes.white,
    backgroundColor: Themes.secondary,
  },
  actionContainer: {
    alignSelf: "center",
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-evenly",
  },
  errorTextStyle: {
    alignSelf: "center",
    color: Themes.red,
    fontWeight: 600,
  },
  errorStyle: {
    borderColor: Themes.red,
    borderWidth: moderateScale(2),
  },
});
