import { styles } from "./styles";
import DropDown from "@/app/common/components/DropDown";
import { Constants } from "@/app/common/constants";
import moderateScale from "@/app/utils/responsiveScale";
import { Pressable, Text, TextInput, View } from "react-native";
import { useTeacherContext } from "../../context/useTeacherContext";
const BasicInfo = () => {
  const { basicInfo, setBasicInfo } = useTeacherContext();
  return (
    <View style={styles.container}>
      <Text style={styles.headingTextStyle}>Basic Info</Text>
      <DropDown
        style={styles.textInputStyle}
        placeHolder="Class ID"
        data={Constants.common.classIds}
        labelField="value"
        containerStyle={{ height: moderateScale(250) }}
        onChange={(value) => {
          setBasicInfo((prev) => ({ ...prev, classId: value }));
        }}
      />
      <TextInput
        style={styles.textInputStyle}
        placeholder="Mentor Name"
        onChange={(value) => {
          setBasicInfo((prev) => ({ ...prev, mentorName: value }));
        }}
      />
      <Pressable style={styles.actionableButtonStyle}>
        <Text style={styles.actionableButtonTextStyle}>Save</Text>
      </Pressable>
    </View>
  );
};
export default BasicInfo;
