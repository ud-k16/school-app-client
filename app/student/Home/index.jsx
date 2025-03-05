import TodaysTimeTable from "@/src/student/components/TodaysTimetable";

import { View, StyleSheet } from "react-native";

const StudentHome = () => {
  return (
    <View style={styles.container}>
      <TodaysTimeTable />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default StudentHome;
