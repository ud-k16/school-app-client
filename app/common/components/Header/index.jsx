import { styles } from "./styles";
import { Text, View } from "react-native";
import useLogout from "../../hooks/useLogout";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const Header = ({ title = "" }) => {
  const { logoutUser } = useLogout();
  return (
    <View style={styles.container}>
      <Text style={styles.titleTextStyle}>{title}</Text>
      <MaterialCommunityIcons
        name="account-outline"
        size={24}
        color="black"
        onPress={logoutUser}
      />
    </View>
  );
};
export default Header;
