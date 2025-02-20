import { styles } from "./styles";
import DropDown from "@/app/common/components/DropDown";
import { Pressable, Text, TextInput, View } from "react-native";
const BasicInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingTextStyle}>Basic Info</Text>
      <DropDown style={styles.textInputStyle} placeHolder="Class ID" />
      <TextInput style={styles.textInputStyle} placeholder="Mentor Name" />
      <Pressable style={styles.actionableButtonStyle}>
        <Text style={styles.actionableButtonTextStyle}>Save</Text>
      </Pressable>
    </View>
  );
};
export default BasicInfo;
