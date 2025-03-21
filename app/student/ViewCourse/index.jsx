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
import { useCallback, useState } from "react";

const ViewCourse = () => {
  const { course, fetchLatestCourseData } = useStudentContext();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await fetchLatestCourseData();
    } catch (error) {
      // log error
      console.log(error.message);
    } finally {
      setRefreshing(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Header title={"Courses"} />
      {course ? (
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
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
