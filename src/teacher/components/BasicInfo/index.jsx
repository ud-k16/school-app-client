import { styles } from "./styles";
import DropDown from "@/src/common/components/DropDown";
import { Constants } from "@/src/common/constants";
import moderateScale from "@/src/utils/responsiveScale";
import { Text, TextInput, View } from "react-native";
import { useTeacherContext } from "../../context/useTeacherContext";
import { useAuthContext } from "@/src/common/context/useAuthContext";
const BasicInfo = () => {
  const { user } = useAuthContext();
  const { setBasicInfo } = useTeacherContext();
  return (
    <View style={styles.container}>
      <Text style={styles.headingTextStyle}>Basic Info</Text>
      <View style={styles.infoStyle}>
        <Text
          children="Class ID"
          editable={false}
          style={styles.infoHeaderText}
        />
        <Text
          editable={false}
          children={user?.classId}
          style={styles.textStyle}
        />
      </View>
      <View style={styles.infoStyle}>
        <Text
          children="Class Teacher Name"
          editable={false}
          style={styles.infoHeaderText}
        />
        <Text
          editable={false}
          children={user?.name}
          style={[styles.textStyle, { textTransform: "capitalize" }]}
        />
      </View>
    </View>
  );
};
export default BasicInfo;
