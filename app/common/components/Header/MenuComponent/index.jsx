import useLogout from "@/app/common/hooks/useLogout";
import { styles } from "./styles";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, Text, View } from "react-native";
const MenuComponent = () => {
  const { logoutUser } = useLogout();
  return (
    <View style={styles.container}>
      <Pressable style={styles.displayStack1} onPress={logoutUser}>
        <MaterialIcons
          name="account-circle"
          size={24}
          color="black"
          style={styles.iconStyle}
        />
        <Text style={styles.itemTextStyle}>Logout </Text>
      </Pressable>
    </View>
  );
};
export default MenuComponent;
