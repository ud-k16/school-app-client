import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import Headers from "../../../common/components/Header";
import TimeBreak from "../../components/TimeBreak";
const ManageTimeTable = () => {
  return (
    <View style={styles.container}>
      <Headers title="Time Table" />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <TimeBreak />
      </ScrollView>
    </View>
  );
};
export default ManageTimeTable;
