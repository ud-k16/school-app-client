import WorkDays from "../../components/WorkDays";
import { styles } from "./styles";

import { View } from "react-native";
const StudentHome = () => {
  return (
    <View style={styles.container}>
      <WorkDays />
    </View>
  );
};
export default StudentHome;
