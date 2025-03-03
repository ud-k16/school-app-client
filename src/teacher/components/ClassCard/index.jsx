import { useAuthContext } from "@/src/common/context/useAuthContext";
import { styles } from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Themes } from "@/src/utils/themes";
import { router } from "expo-router";

const ClassCard = ({
  title = "",
  onEdit = () => {},
  onCardPress = () => {},
}) => {
  const { user } = useAuthContext();
  return (
    <Pressable style={styles.container}>
      <View style={styles.classIdContainer}>
        <Text style={styles.classIdTextStyle}>{title}</Text>
      </View>

      <View style={styles.displayStack1}>
        <Pressable style={styles.displayStack2} onPress={onEdit}>
          <MaterialCommunityIcons
            name="file-document-edit-outline"
            size={30}
            color="black"
          />
          <Text style={styles.editTextStyle}>Edit</Text>
        </Pressable>
        <Pressable style={styles.displayStack2} onPress={onCardPress}>
          <MaterialIcons name="table-view" size={30} color="black" />
          <Text style={styles.editTextStyle}>View</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};
export default ClassCard;
