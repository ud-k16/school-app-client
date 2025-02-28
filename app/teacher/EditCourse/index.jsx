import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useTeacherContext } from "@/src/teacher/context/useTeacherContext";
import CourseCard from "../../../src/teacher/components/CourseCard";
import useCourse from "../../../src/teacher/hooks/useCourse";
const EditCourse = () => {
  const { course, isLoading } = useTeacherContext();
  const { deleteCourse } = useCourse();
  if (isLoading)
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <FontAwesome5 name="calendar-plus" size={24} color="black" />
      <ScrollView>
        {course?.map((coursedata, index) => {
          <CourseCard
            key={index}
            subject={coursedata.subject}
            description={coursedata.description}
            teacher={coursedata.teacher}
            onDelete={() => {
              deleteCourse(index);
            }}
          />;
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({});
export default EditCourse;
