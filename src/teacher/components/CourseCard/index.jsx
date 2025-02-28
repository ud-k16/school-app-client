import { styles } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text, View } from "react-native";
const CourseCard = ({ subject, teacher, description, onDelete = () => {} }) => {
  return (
    <View style={styles.container}>
      <View style={styles.displayStack1}>
        <Text>{subject}</Text>
        <Text>{description}</Text>
        <Text>{teacher}</Text>
      </View>
      <AntDesign
        name="delete"
        size={24}
        color="black"
        style={{ alignSelf: "flex-end" }}
        onPress={onDelete}
      />
    </View>
  );
};
export default CourseCard;
