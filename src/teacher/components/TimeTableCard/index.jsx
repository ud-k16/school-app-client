import { useAuthContext } from "@/src/common/context/useAuthContext";
import { styles } from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Themes } from "@/src/utils/themes";
import { router } from "expo-router";
const TimeTableCard = ({}) => {
  const { user } = useAuthContext();
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        router.navigate({
          pathname: "/teacher/PreviewTimeTable",
          params: { preview: false },
        });
      }}
    >
      <View style={styles.classIdContainer}>
        <Text style={styles.classIdTextStyle}>{user.classId ?? "CLASS6A"}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.statusTextStyle}>{"Status : "}</Text>
        <Text
          style={[styles.statusTextStyle, { color: Themes.lightFadedGreen }]}
        >
          {"Published"}
        </Text>
      </View>

      <View style={styles.displayStack1}>
        <Pressable style={styles.displayStack2}>
          <MaterialCommunityIcons
            name="file-document-edit-outline"
            size={24}
            color="black"
          />
          <Text>Edit</Text>
        </Pressable>
        <Pressable style={styles.displayStack2}>
          <MaterialIcons name="table-view" size={24} color="black" />
          <Text>Publish</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};
export default TimeTableCard;
