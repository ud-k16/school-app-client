import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useTeacherContext } from "@/src/teacher/context/useTeacherContext";
import CourseCard from "../../../src/common/components/CourseCard";
import Header from "../../../src/common/components/Header";
import useCourse from "../../../src/teacher/hooks/useCourse";
import moderateScale from "@/src/utils/responsiveScale";
import { Themes } from "@/src/utils/themes";
import { useState } from "react";

const EditCourse = () => {
  const { course, isLoading } = useTeacherContext();
  const { deleteCourse, editCourse, insertCourse } = useCourse();
  const [state, setState] = useState({
    addCourse: false,
    subject: "",
    description: "",
    teacher: "",
    subjectError: "",
    teacherError: "",
    descriptionError: "",
  });
  const validation = () => {
    if (state.subject && state.description && state.teacher) {
      insertCourse({
        subject: state.subject,
        teacher: state.teacher,
        description: state.description,
      });
      hideCourseField();
    } else {
      setState((prev) => ({
        ...prev,
        subjectError: !Boolean(prev.subject),
        teacherError: !Boolean(prev.teacher),
        descriptionError: !Boolean(prev.description),
      }));
    }
  };
  const resetState = () => {
    setState({
      addCourse: false,
      subject: "",
      description: "",
      teacher: "",
      subjectError: "",
      teacherError: "",
      descriptionError: "",
    });
  };
  const showCourseField = () =>
    setState((prev) => ({ ...prev, addCourse: true }));
  const hideCourseField = () =>
    setState((prev) => ({ ...prev, addCourse: false }));
  if (isLoading)
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <Header title={"Edit Course"} />
      <Pressable onPress={showCourseField} style={styles.addButton}>
        <FontAwesome5 name="plus" size={24} color={styles.addButton.color} />
        <Text style={{ color: styles.addButton.color }}>Add course</Text>
      </Pressable>
      {!!state.addCourse && (
        <View style={styles.editContainer}>
          <TextInput
            style={[
              styles.textInputStyle,
              state.subjectError && styles.errorStyle,
            ]}
            placeholder="Course name"
            onChangeText={(text) =>
              setState((prev) => ({
                ...prev,
                subject: text,
              }))
            }
          />
          <TextInput
            style={[
              styles.textInputStyle,
              state.teacherError && styles.errorStyle,
            ]}
            onChangeText={(text) =>
              setState((prev) => ({
                ...prev,
                teacher: text,
              }))
            }
            placeholder="Teacher incharge"
          />
          <TextInput
            multiline
            placeholder="Course Description"
            onChangeText={(text) =>
              setState((prev) => ({
                ...prev,
                description: text,
              }))
            }
            style={[
              styles.textInputStyle,
              { height: moderateScale(100), textAlignVertical: "top" },
              state.descriptionError && styles.errorStyle,
            ]}
          />
          {(state.descriptionError ||
            state.subjectError ||
            state.teacherError) && (
            <Text style={styles.errorTextStyle}> *Fill All Fields</Text>
          )}
          <View style={styles.actionContainer}>
            <Pressable
              style={styles.actionButton}
              onPress={() => {
                resetState();
              }}
            >
              <Text style={{ color: styles.actionButton.color }}>Cancel</Text>
            </Pressable>
            <Pressable
              style={styles.actionButton}
              onPress={() => {
                validation();
              }}
            >
              <Text style={{ color: styles.actionButton.color }}>Save</Text>
            </Pressable>
          </View>
        </View>
      )}
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
                editable={true}
                onDelete={() => {
                  deleteCourse(index);
                }}
                onEdit={editCourse}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: moderateScale(10),
  },
  scrollViewContainer: {
    flexGrow: 1,
    rowGap: moderateScale(10),
  },
  actionContainer: {
    alignSelf: "center",
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-evenly",
  },
  errorTextStyle: {
    alignSelf: "center",
    color: Themes.red,
    fontWeight: 600,
  },
  errorStyle: {
    borderColor: Themes.red,
    borderWidth: moderateScale(2),
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    width: "30%",
    height: moderateScale(40),
    borderRadius: moderateScale(5),
    justifyContent: "space-evenly",
    color: Themes.textColor,
    backgroundColor: Themes.white,
    elevation: 6,
  },
  editContainer: {
    marginVertical: moderateScale(5),
    rowGap: moderateScale(15),
  },
  textInputStyle: {
    alignSelf: "center",
    width: "90%",
    height: moderateScale(60),
    elevation: 6,
    backgroundColor: Themes.white,
    // borderWidth: moderateScale(2),
    borderRadius: moderateScale(5),
    paddingHorizontal: moderateScale(10),
    fontSize: moderateScale(17),
  },
  actionButton: {
    alignSelf: "center",
    width: moderateScale(100),
    height: moderateScale(40),
    borderRadius: moderateScale(5),
    alignItems: "center",
    justifyContent: "center",
    color: Themes.white,
    backgroundColor: Themes.secondary,
  },
});
export default EditCourse;
