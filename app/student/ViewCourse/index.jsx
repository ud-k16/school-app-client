import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useStudentContext } from "@/src/student/context/useStudentContext";
import CourseCard from "../../../src/common/components/CourseCard";
import Header from "../../../src/common/components/Header";
import moderateScale from "@/src/utils/responsiveScale";
import EmptyContent from "@/app/common/EmptyScreen";
import { useEffect } from "react";

const ViewCourse = () => {
  const { course, isLoading, fetchLatestCourseData, setState } =
    useStudentContext();

  useEffect(() => {
    loadCourse();
  }, []);

  const loadCourse = async () => {
    try {
      setState((prev) => ({ ...prev, isLoading: true }));
      await fetchLatestCourseData();
      setState((prev) => ({ ...prev, isLoading: false }));
    } catch (error) {
      setState((prev) => ({ ...prev, isLoading: false }));
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
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={loadCourse} />
          }
        >
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
