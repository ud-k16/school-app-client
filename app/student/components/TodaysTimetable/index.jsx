import { useStudentContext } from "../../hooks/useStudentContext";
import { styles } from "./styles";
import { View } from "react-native";

const TodaysTimeTable = () => {
  const { timeTable } = useStudentContext();
  console.log(timeTable);

  return <View style={styles.container}></View>;
};
export default TodaysTimeTable;
