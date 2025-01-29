import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import Headers from "../../../common/components/Header";
const ManageTimeTable = () => {
  return (
    <View style={styles.container}>
      <Headers title="Time Table" />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <TextInput
          placeholder="Class"
          keyboardType="number-pad"
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="Class"
          keyboardType="number-pad"
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="Class"
          keyboardType="number-pad"
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="Class"
          keyboardType="number-pad"
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="Class"
          keyboardType="number-pad"
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="Class"
          keyboardType="number-pad"
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="Class"
          keyboardType="number-pad"
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="Class"
          keyboardType="number-pad"
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="Class"
          keyboardType="number-pad"
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="Class"
          keyboardType="number-pad"
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="Class"
          keyboardType="number-pad"
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="Class"
          keyboardType="number-pad"
          style={styles.textInputStyle}
        />
        <Pressable style={styles.actionableButtonStyle}>
          <Text style={styles.actionableButtonTextStyle}>create</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};
export default ManageTimeTable;
