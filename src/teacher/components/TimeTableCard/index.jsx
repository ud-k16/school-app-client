import { useAuthContext } from "@/src/common/context/useAuthContext";
import { styles } from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const TimeTableCard = ({}) => {
  const { user } = useAuthContext();
  return (
    <View style={styles.container} onPress={() => {}}>
      <MaterialCommunityIcons
        name="file-document-edit-outline"
        size={24}
        color="black"
      />
      <MaterialIcons name="table-view" size={24} color="black" />
      <Text>{user.classId ?? "CLASS6A"}</Text>
      <Text>{user.classId ?? "Published"}</Text>
      <View>
        <Text>View</Text>
        <Text>Publish</Text>
      </View>
    </View>
  );
};
export default TimeTableCard;
