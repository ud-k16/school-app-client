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
  const { setState, authenticateUser } = useLogin();
  return (
    <View style={styles.container}>
      <Image alt="Image Not Found" style={styles.logoConatiner} source={LOGO} />
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
      <Pressable style={styles.loginButtonStyle} onPress={authenticateUser}>
        <Text style={styles.loginButtonTextStyle}>Login</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
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

export default Login;
