import { styles } from "./styles";
import LOGO from "../../../assets/logo.png";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const { authenticateUser } = useLogin();
  return (
    <View style={styles.container}>
      <Image alt="Image Not Found" style={styles.logoConatiner} source={LOGO} />
      <TextInput style={styles.textInputStyle} placeholder="User Id" />
      <TextInput
        style={styles.textInputStyle}
        placeholder="Password"
        secureTextEntry
      />
      <Pressable style={styles.loginButtonStyle} onPress={authenticateUser}>
        <Text style={styles.loginButtonTextStyle}>Login</Text>
      </Pressable>
    </View>
  );
};
export default Login;
