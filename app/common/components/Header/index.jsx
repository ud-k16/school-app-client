import { styles } from "./styles";
import { Dimensions, Text, View } from "react-native";
import useLogout from "../../hooks/useLogout";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Themes } from "@/app/utils/themes";
import { useAuthContext } from "../../context/useAuthContext";
import { useRef, useState } from "react";
import CustomModal from "../Modal";

const Header = ({ title = "" }) => {
  const ref = useRef();
  const { logoutUser } = useLogout();
  const { user } = useAuthContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [position, setPosition] = useState("");

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const locatePosition = () => {
    if (ref.current) {
      ref.current.measureInWindow((x, y, width, height) => {
        console.log(Dimensions.get("window").width, x);

        setPosition({
          width: Math.floor(width),
          left: Math.floor(x),
          top: Math.floor(y) + height,
        });
      });
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleTextStyle}>{title}</Text>
      <View ref={ref}>
        <MaterialCommunityIcons
          name="menu"
          size={24}
          color={Themes.white}
          onPress={showModal}
          onLayout={locatePosition}
        />
      </View>

      <CustomModal
        visibility={modalVisible}
        hideModal={hideModal}
        backdrop={false}
        contentContainerStyle={
          {
            // right: position.left,
          }
        }
      >
        <View
          style={[
            styles.menuContainer,
            {
              top: position.top,
              left:
                Dimensions.get("window").width / 2 -
                (Dimensions.get("window").width -
                  position.left -
                  position.width),
            },
          ]}
        >
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
