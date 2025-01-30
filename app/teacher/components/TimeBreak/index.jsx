import { styles } from "./styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Pressable, Text, View } from "react-native";
const TimeBreak = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.addButtonStyle}>
        <FontAwesome5 name="calendar-plus" size={24} color="black" />
        <Text style={styles.addButtonTextStyle}> Add Period </Text>
      </Pressable>
    </View>
  );
};
export default TimeBreak;
