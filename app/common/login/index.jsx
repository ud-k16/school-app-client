import { styles } from "./styles";
import LOGO from "@/src/assets/logo.png";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import useLogin from "@/src/common/hooks/useLogin";

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
export default Login;
