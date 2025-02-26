import { styles } from "./styles";

import { Text, View } from "react-native";
const CourseCard = ({ course }) => {
  // course onject {subject:"",description:"","teacher"}
  return (
    <View style={styles.container}>
      <View>
        <Text>{course.subject}</Text>
      </View>
      <View>
        <Text>{course.description}</Text>
        <View style={styles.displayStack1}>
          <Text>{"Assigned Teacher : "}</Text>
          <Text>{course.teacher}</Text>
        </View>
      </View>
    </View>
  );
};
export default CourseCard;
