import useLogout from "@/app/common/hooks/useLogout";
import { styles } from "./styles";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Pressable, Text, View } from "react-native";
const MenuComponent = () => {
  const { logoutUser } = useLogout();
  return (
    <View style={styles.container}>
      <Pressable style={styles.displayStack1}>
        <FontAwesome6 name="table-list" size={24} color="black" />
        <Text style={styles.itemTextStyle}>View All</Text>
      </Pressable>
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
