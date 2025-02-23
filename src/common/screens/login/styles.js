const { StyleSheet } = require("react-native");
const { Themes } = require("../../../utils/themes");
const { default: moderateScale } = require("../../../utils/responsiveScale");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10),
    rowGap: moderateScale(20),
  },
  logoConatiner: {
    alignSelf: "center",
    height: moderateScale(200),
    width: "90%",
    resizeMode: "contain",
  },
  textInputStyle: {
    alignSelf: "center",
    width: "90%",
    height: moderateScale(60),
    borderColor: Themes.greyShade,
    borderWidth: moderateScale(2),
    borderStyle: "solid",
    borderRadius: moderateScale(5),
    paddingHorizontal: moderateScale(10),
  },
  loginButtonStyle: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Themes.secondary,
    width: "60%",
    height: moderateScale(50),
    borderRadius: moderateScale(5),
  },
  loginButtonTextStyle: {
    color: Themes.white,
  },
});
