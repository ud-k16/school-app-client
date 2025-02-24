import { StyleSheet, View } from "react-native";
import { useTeacherContext } from "@/src/teacher/context/useTeacherContext";
const TeacherHome = () => {
  const { timeTable } = useTeacherContext();
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default TeacherHome;
