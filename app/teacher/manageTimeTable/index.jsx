import { ScrollView, View } from "react-native";
import { styles } from "./styles";

const ManageTimeTable = () => {
  return (
    <View style={styles.container}>
      <Headers title="Time Table" />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <BasicInfo />
        <WorkDays />
      </ScrollView>
    </View>
  );
};
export default ManageTimeTable;
