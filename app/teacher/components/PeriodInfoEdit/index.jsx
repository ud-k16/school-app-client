import { Pressable } from "react-native";
import { styles } from "./styles";
import DropDown from "../../../common/components/DropDown";
import { ScrollView, Text, TextInput, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const PeriodInfoEdit = ({ hideModal = () => {} }) => {
  return (
    <View style={styles.container}>
      <AntDesign
        name="closecircleo"
        size={35}
        color="black"
        style={styles.closeIconStyle}
        onPress={hideModal}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Period Name  (ex.)Assembly"
        />
        <Text style={styles.ORTextStyle}>OR</Text>
        <DropDown
          style={styles.textInputStyle}
          placeHolder="Course"
          placeHolderStyle={styles.dropdownPlaceHolderStyle}
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
