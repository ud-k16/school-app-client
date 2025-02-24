import { styles } from "./styles";
import { Dimensions, Text, View } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Themes } from "@/src/utils/themes";
import { useRef, useState } from "react";
import CustomModal from "../Modal";
import MenuComponent from "../MenuComponent";

const Header = ({ title = "" }) => {
  const ref = useRef();

  const [modalVisible, setModalVisible] = useState(false);
  // for locating menu placement position
  const [position, setPosition] = useState("");

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const locatePosition = () => {
    if (ref.current) {
      ref.current.measureInWindow((x, y, width, height) => {
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
          <MenuComponent />
        </View>
      </CustomModal>
    </View>
  );
};
export default Header;
