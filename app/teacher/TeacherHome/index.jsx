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
      <ClassCard
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
