import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import Headers from "../../../common/components/Header";
import UpdatePeriodsForDay from "../../components/UpdatePeriodsForDay";

const ManageTimeTable = () => {
  const workDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "saturday",
    "sunday",
  ];
  return (
    <View style={styles.container}>
      <Headers title="Time Table" />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
      ></ScrollView>
    </View>
  );
};
export default ManageTimeTable;
