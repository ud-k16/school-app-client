import { useAuthContext } from "@/src/common/context/useAuthContext";
import { styles } from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, Text, View } from "react-native";
const TimeTableCard = ({}) => {
  const { user } = useAuthContext();
  return (
    <Pressable style={styles.container} onPress={() => {}}>
      <MaterialCommunityIcons
        name="file-document-edit-outline"
        size={24}
        color="black"
      />
      <Text>{user.classId}</Text>
    </Pressable>
  );
};
export default TimeTableCard;
