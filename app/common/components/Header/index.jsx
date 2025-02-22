import { styles } from "./styles";
import { Text, View } from "react-native";
import useLogout from "../../hooks/useLogout";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Themes } from "@/app/utils/themes";
import { useAuthContext } from "../../context/useAuthContext";
import { useState } from "react";
import CustomModal from "../Modal";

const Header = ({ title = "" }) => {
  const { logoutUser } = useLogout();
  const { user } = useAuthContext();
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  return (
    <View style={styles.container}>
      <Text style={styles.titleTextStyle}>{title}</Text>

      <MaterialCommunityIcons
        name="menu"
        size={24}
        color={Themes.white}
        onPress={showModal}
      />

      <CustomModal visibility={modalVisible} hideModal={hideModal}>
        <View style={styles.menuContainer}>
          <MaterialIcons
            name="account-circle"
            size={24}
            color="black"
            onPress={logoutUser}
          />
        </View>
      </CustomModal>
    </View>
  );
};
export default Header;
