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
      <Pressable onPress={hideModal} style={styles.modalContainerOverLay}>
        <Pressable
          style={[styles.modalContentDefaultStyle, contentContainerStyle]}
          onPress={null}
        >
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  );
};
export default CustomModal;
