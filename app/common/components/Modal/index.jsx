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
    <Modal visible={visibility}>
      <Pressable onPress={hideModal} style={styles.modalContainerOverLay}>
        <View style={[styles.modalContentDefaultStyle, contentContainerStyle]}>
          {children}
        </View>
      </Pressable>
    </Modal>
  );
};
export default Modal;
