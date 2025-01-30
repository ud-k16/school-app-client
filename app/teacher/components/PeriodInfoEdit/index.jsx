import { Pressable } from "react-native";
import { styles } from "./styles";

import { ScrollView, Text, TextInput, View } from "react-native";
const PeriodInfoEdit = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Period Name  (ex.)Assembly"
        />
        <Text style={styles.inputTitleTextStyle}>Start Time</Text>
        <View style={styles.displayStack1}>
          <TextInput
            style={[styles.textInputStyle, styles.timeInput]}
            placeholder="hours"
          />
          <TextInput
            style={[styles.textInputStyle, styles.timeInput]}
            placeholder="mins"
          />
        </View>
        <Text style={styles.inputTitleTextStyle}>End Time</Text>
        <View style={styles.displayStack1}>
          <TextInput
            style={[styles.textInputStyle, styles.timeInput]}
            placeholder="hours"
          />
          <TextInput
            style={[styles.textInputStyle, styles.timeInput]}
            placeholder="mins"
          />
        </View>
        <Pressable style={styles.saveButtonStyle}>
          <Text style={styles.saveButtonTextStyle}> Save </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};
export default PeriodInfoEdit;
