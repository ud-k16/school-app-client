import WorkDays from "../../components/WorkDays";
import TodaysTimeTable from "../../components/TodaysTimetable";
import { styles } from "./styles";

import { View } from "react-native";
const StudentHome = () => {
  return (
    <View style={styles.container}>
      <TodaysTimeTable />
    </View>
  );
};
export default StudentHome;
