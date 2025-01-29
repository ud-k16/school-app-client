const { StyleSheet } = require("react-native");
const { Themes } = require("../../../utils/themes");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  logoConatiner: {
    alignSelf: "center",
  },
  textInputStyle: {
    alignSelf: "center",
  },
  loginButtonStyle: {
    alignSelf: "center",
    backgroundColor: Themes.secondary,
    borderRadius: 5,
  },
});
