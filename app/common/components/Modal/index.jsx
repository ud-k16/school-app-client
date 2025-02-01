import { styles } from "./styles";
import { View, Modal, Pressable } from "react-native";

const CustomModal = ({
  children,
  hideModal = () => {},
  showModal = () => {},
  visibility = false,
  contentContainerStyle = {},
}) => {
  return (
    <Modal visible={visibility} transparent onRequestClose={hideModal}>
      <View style={[styles.modalContentDefaultStyle, contentContainerStyle]}>
        {children}
      </View>
    </Modal>
  );
};
export default CustomModal;
