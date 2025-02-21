import { styles } from "./styles";
import { Text, View } from "react-native";
import useLogout from "../../hooks/useLogout";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Themes } from "@/app/utils/themes";
import { useAuthContext } from "../../context/useAuthContext";
const Header = ({ title = "" }) => {
  const { logoutUser } = useLogout();
  const { user } = useAuthContext();
  return (
    <View style={styles.container}>
      <Text style={styles.titleTextStyle}>{title}</Text>

      <View style={styles.menuContainer}>
        {/* <Entypo
            name="dots-three-vertical"
            size={24}
            color={Themes.white}
            onPress={logoutUser}
          /> */}
        <MaterialCommunityIcons
          name="menu"
          size={24}
          color={Themes.white}
          onPress={logoutUser}
        />
      </View>
    </View>
  );
};
export default Header;
