import { StyleSheet, View } from "react-native";
import { useAuthContext } from "@/src/common/context/useAuthContext";
import TimeTableCard from "@/src/teacher/components/TimeTableCard";
import Header from "@/src/common/components/Header";
import moderateScale from "@/src/utils/responsiveScale";
const TeacherHome = () => {
  const { user } = useAuthContext();

  return (
    <View style={styles.container}>
      <Header title={user?.name} />
      <TimeTableCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: moderateScale(20),
  },
});
export default TeacherHome;
