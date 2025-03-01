import { StyleSheet, View } from "react-native";
import { useAuthContext } from "@/src/common/context/useAuthContext";
import ClassCard from "@/src/teacher/components/ClassCard";
import Header from "@/src/common/components/Header";
import moderateScale from "@/src/utils/responsiveScale";
import { router } from "expo-router";
const TeacherHome = () => {
  const { user } = useAuthContext();

  return (
    <View style={styles.container}>
      <Header title={user?.name} />
      <View style={styles.cardContainer}>
        <ClassCard
          title="Time Table"
          onCardPress={() => {
            router.navigate({
              pathname: "/teacher/EntireTimeTable",
            });
          }}
          onEdit={() => {
            router.navigate({
              pathname: "/teacher/EditTimeTable",
            });
          }}
          onPublish={() => {
            router.navigate({
              pathname: "/teacher/PreviewTimeTable",
            });
          }}
        />
        <ClassCard
          title="Courses"
          onCardPress={() => {
            router.navigate({
              pathname: "/teacher/ViewCourse",
            });
          }}
          onEdit={() => {
            router.navigate({
              pathname: "/teacher/EditCourse",
            });
          }}
          onPublish={() => {
            router.navigate({
              pathname: "/teacher/PreviewTimeTable",
            });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    marginTop: moderateScale(20),
    rowGap: moderateScale(30),
  },
});
export default TeacherHome;
