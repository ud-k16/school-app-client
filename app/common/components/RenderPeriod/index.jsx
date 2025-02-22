import { styles } from "./styles";

import { Text, View } from "react-native";
const RenderPeriod = ({ period }) => {
  /**
    period is an object with definition 
    {
    time:"",
    subject:""
    }
  */
  return (
    <View style={styles.container}>
      <Text style={[styles.itemContainer, styles.timeStyle]}>
        {period.time}
      </Text>
      <Text style={[styles.itemContainer, styles.subjectStyle]}>
        {period.subject}
      </Text>
    </View>
  );
};
export default RenderPeriod;
