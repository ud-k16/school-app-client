import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useTeacherContext } from "@/src/teacher/context/useTeacherContext";
import CourseCard from "../../../src/teacher/components/CourseCard";
import useCourse from "../../../src/teacher/hooks/useCourse";
import moderateScale from "@/src/utils/responsiveScale";

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
      <Text>Add course</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View>
          {course?.map((coursedata, index) => {
            return (
              <CourseCard
                key={index}
                subject={coursedata.subject}
                description={coursedata.description}
                teacher={coursedata.teacher}
                onDelete={() => {
                  deleteCourse(index);
                }}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    rowGap: moderateScale(10),
  },
});
export default EditCourse;
