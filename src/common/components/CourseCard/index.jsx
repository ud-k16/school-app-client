import { styles } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, Text, TextInput, View } from "react-native";
import Foundation from "@expo/vector-icons/Foundation";
import { useState } from "react";
import moderateScale from "@/src/utils/responsiveScale";
const CourseCard = ({
  index = 0,
  subject,
  teacher,
  description,
  editable = false,
  onDelete = () => {},
  onEdit = () => {},
}) => {
  const [editVisible, setEditVisible] = useState(false);
  const [state, setState] = useState({
    subject,
    teacher,
    description,
    subjectError: "",
    teacherError: "",
    descriptionError: "",
  });
  const showEdit = () => setEditVisible(true);
  const hideEdit = () => setEditVisible(false);
  const validation = () => {
    if (state.subject && state.description && state.teacher) {
      onEdit({
        index,
        subject: state.subject,
        teacher: state.teacher,
        description: state.description,
      });
      hideEdit();
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
    hideEdit();
    setState((prev) => ({
      ...prev,
      subject,
      description,
      teacher,
      subjectError: "",
      teacherError: "",
      descriptionError: "",
    }));
  };
  return (
    <View style={styles.container}>
      {!!editVisible && !!editable ? (
        <View style={styles.editContainer}>
          <TextInput
            style={[
              styles.textInputStyle,
              state.subjectError && styles.errorStyle,
            ]}
            defaultValue={subject ?? ""}
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
            defaultValue={teacher ?? ""}
            placeholder="Teacher incharge"
            onChangeText={(text) =>
              setState((prev) => ({
                ...prev,
                teacher: text,
              }))
            }
          />
          <TextInput
            multiline
            defaultValue={description ?? ""}
            placeholder="Course Description"
            style={[
              styles.textInputStyle,
              { height: moderateScale(100), textAlignVertical: "top" },
              state.descriptionError && styles.errorStyle,
            ]}
            onChangeText={(text) =>
              setState((prev) => ({
                ...prev,
                description: text,
              }))
            }
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
      ) : (
        <View style={styles.courseDatacontainer}>
          <View style={styles.displayStack1}>
            <Text style={styles.subjectTextStyle}>{subject}</Text>
            <Text style={styles.descriptionTextStyle}>{description}</Text>
            <View style={styles.displayStack2}>
              <Text>Assigned Teacher :</Text>
              <Text style={styles.teacherTextStyle}> {teacher}</Text>
            </View>
          </View>
          {!!editable && (
            <View style={styles.displayStack3}>
              <AntDesign
                name="delete"
                size={24}
                color="black"
                onPress={onDelete}
              />
              <Foundation
                name="page-edit"
                size={24}
                color="black"
                onPress={showEdit}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};
export default CourseCard;
