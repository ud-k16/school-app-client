import { StyleSheet, Text, View } from "react-native";
import Header from "@/src/common/components/Header";
import { useStudentContext } from "@/src/student/context/useStudentContext";
const ViewCourse = () => {
  const { course } = useStudentContext();
  return (
    <View style={styles.container}>
      <Header title={"Course"} />
      {course?.map((course, index) => (
        <View key={index}>
          <Text>{course.subject}</Text>
          <Text>{course.description}</Text>
          <Text>{course.teacher}</Text>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ViewCourse;
