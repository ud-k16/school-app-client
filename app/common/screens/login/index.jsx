import { styles } from "./styles";

import { Image, Pressable, Text, TextInput, View } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image alt="Image Not Found" style={styles.logoConatiner} />
      <TextInput style={styles.textInputStyle} placeholder="User Id" />
      <TextInput
        style={styles.textInputStyle}
        placeholder="Password"
        secureTextEntry
      />
      <Pressable style={styles.loginButtonStyle}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};
export default Login;
