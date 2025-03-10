import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useTeacherContext } from "@/src/teacher/context/useTeacherContext";
import CourseCard from "../../../src/common/components/CourseCard";
import Header from "../../../src/common/components/Header";
import moderateScale from "@/src/utils/responsiveScale";
import EmptyContent from "../../common/EmptyScreen";
import { useEffect } from "react";

const ViewCourse = () => {
  const {
    coursePosted: course,
    isLoading,
    setState: setTeacherState,
    fetchLatestCourseData,
  } = useTeacherContext();

  useEffect(() => {
    loadCourse();
  }, []);

  const loadCourse = async () => {
    try {
      setTeacherState((prev) => ({
        ...prev,
        isLoading: true,
      }));
      await fetchLatestCourseData();
      setTeacherState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading)
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Header title={"Courses"} />
      {course ? (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View>
            {course?.map((coursedata, index) => {
              return (
                <CourseCard
                  key={index}
                  index={index}
                  subject={coursedata.subject}
                  description={coursedata.description}
                  teacher={coursedata.teacher}
                />
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <EmptyContent />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, rowGap: moderateScale(5) },
  scrollViewContainer: {
    flexGrow: 1,
    rowGap: moderateScale(10),
  },
});
export default ViewCourse;
