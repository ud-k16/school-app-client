import { StyleSheet, Text, View } from "react-native";
import Header from "@/src/common/components/Header";
import CourseCard from "@/src/common/components/CourseCard";
import { useStudentContext } from "@/src/student/context/useStudentContext";
const ViewCourse = () => {
  const { course } = useStudentContext();
  return (
    <View style={styles.container}>
      <Header title={"Course"} />
      {course?.map((course, index) => (
        <CourseCard key={index} course={course} />
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
