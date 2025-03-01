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
  onDelete = () => {},
  onEdit = () => {},
}) => {
  const [editVisible, setEditVisible] = useState(false);
  const [state, setState] = useState({
    subject,
    teacher,
    description,
  });
  const showEdit = () => setEditVisible(true);
  const hideEdit = () => setEditVisible(false);
  return (
    <View style={styles.container}>
      {!!editVisible ? (
        <View style={styles.editContainer}>
          <TextInput
            style={styles.textInputStyle}
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
            style={styles.textInputStyle}
            defaultValue={teacher ?? ""}
            placeholder="Teacher incharge"
          />
          <TextInput
            multiline
            defaultValue={description ?? ""}
            placeholder="Course Description"
            style={[
              styles.textInputStyle,
              { height: moderateScale(100), textAlignVertical: "top" },
            ]}
          />
          <Pressable
            style={styles.saveButton}
            onPress={() => {
              onEdit({
                index,
                subject: state.subject,
                teacher: state.teacher,
                description: state.description,
              });
              hideEdit();
            }}
          >
            <Text style={{ color: styles.saveButton.color }}>Save</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.courseDatacontainer}>
          <View style={styles.displayStack1}>
            <Text>{subject}</Text>
            <Text>{description}</Text>
            <View style={styles.displayStack2}></View>
            <Text>Assigned Teacher : {teacher}</Text>
          </View>
          <AntDesign
            name="delete"
            size={24}
            color="black"
            style={{ alignSelf: "flex-end" }}
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
  );
};
export default CourseCard;
