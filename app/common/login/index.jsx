import LOGO from "@/src/assets/logo.png";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import useLogin from "@/src/common/hooks/useLogin";
const { Themes } = require("../../../src/utils/themes");
const {
  default: moderateScale,
} = require("../../../src/utils/responsiveScale");

const Login = () => {
  const { loginError, isLoading, setState, authenticateUser } = useLogin();
  return (
    <View style={styles.container}>
      <Text style={styles.logoConatiner} children={"School Application"} />
      <TextInput
        style={styles.textInputStyle}
        placeholder="User Id"
        onChangeText={(text) => setState((prev) => ({ ...prev, userId: text }))}
      />
      <TextInput
        style={styles.textInputStyle}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) =>
          setState((prev) => ({ ...prev, password: text }))
        }
      />
      {loginError && <Text style={styles.loginErrorStyle}>{loginError}</Text>}
      <Pressable style={styles.loginButtonStyle} onPress={authenticateUser}>
        <Text style={styles.loginButtonTextStyle}>
          {isLoading ? "Logging..." : "Login"}
        </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10),
    rowGap: moderateScale(30),
    alignItems: "center",
    justifyContent: "center",
  },
  logoConatiner: {
    textTransform: "uppercase",
    fontSize: moderateScale(20),
    width: "90%",
    fontWeight: 600,
    textAlign: "center",
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
  loginErrorStyle: {
    color: Themes.red,
    textAlign: "center",
    fontSize: moderateScale(16),
    alignSelf: "center",
  },
});

export default Login;
