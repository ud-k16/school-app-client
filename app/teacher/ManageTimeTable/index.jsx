import { TextInput, View } from "react-native";
import { styles } from "./styles";

const ManageTimeTable = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Class" keyboardType="number-pad" />
    </View>
  );
};
export default ManageTimeTable;
