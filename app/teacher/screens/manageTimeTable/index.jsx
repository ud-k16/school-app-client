import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import Headers from "../../../common/components/Header";
import WorkDays from "../../components/WorkDays";
import BasicInfo from "../../components/BasicInfo";

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
