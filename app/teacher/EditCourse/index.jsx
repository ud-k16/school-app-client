import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { ScrollView, StyleSheet, View } from "react-native";
const EditCourse = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FontAwesome5 name="calendar-plus" size={24} color="black" />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({});
export default EditCourse;
