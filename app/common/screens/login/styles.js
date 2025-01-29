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

    height: moderateScale(50),
  },
  textInputStyle: {
    alignSelf: "center",
    height: moderateScale(30),
    borderColor: Themes.greyShade,
    borderWidth: moderateScale(2),
    borderStyle: "solid",
  },
  loginButtonStyle: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Themes.secondary,
    height: moderateScale(30),
    borderRadius: moderateScale(5),
  },
});
