import { styles } from "./styles";
import { View, Modal, Pressable } from "react-native";

const CustomModal = ({
  children,
  hideModal = () => {},
  showModal = () => {},
  visibility = false,
  contentContainerStyle = {},
  backdrop = true,
}) => {
  return (
    <Modal visible={visibility} transparent onRequestClose={hideModal}>
      <View
        style={[
          styles.modalContentDefaultStyle,
          contentContainerStyle,
          backdrop && { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        ]}
      >
        {children}
      </View>
    </Modal>
  );
};
export default CustomModal;
