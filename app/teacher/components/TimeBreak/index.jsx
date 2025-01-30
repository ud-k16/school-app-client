import { styles } from "./styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Pressable, Text, View } from "react-native";
const TimeBreak = ({ dayOfWeek = "" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.weekDayTextStyle}>{dayOfWeek}</Text>
      <Pressable style={styles.addButtonStyle}>
        <FontAwesome5 name="calendar-plus" size={24} color="black" />
        <Text style={styles.addButtonTextStyle}> Add Period </Text>
      </Pressable>
    </View>
  );
};
export default TimeBreak;
