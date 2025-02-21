import { useStudentContext } from "../../hooks/useStudentContext";
import { styles } from "./styles";
import { Text, View } from "react-native";

const TodaysTimeTable = () => {
  const { timeTable, isLoading } = useStudentContext();
  if (isLoading)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  console.log("timetable available", timeTable);

  return <View style={styles.container}></View>;
};
export default TodaysTimeTable;
