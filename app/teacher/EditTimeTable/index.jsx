import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import BasicInfo from "@/src/teacher/components/BasicInfo";
import WorkDays from "@/src/teacher/components/WorkDays";
import Header from "@/src/common/components/Header";
const EditTimeTable = () => {
  return (
    <View style={styles.container}>
      <Header title="Time Table" />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <BasicInfo />
        <WorkDays />
      </ScrollView>
    </View>
  );
};
export default EditTimeTable;
