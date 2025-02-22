import { Constants } from "@/app/common/constants";
import { useStudentContext } from "../../context/useStudentContext";
import { styles } from "./styles";
import { Text, View } from "react-native";
import Header from "@/app/common/components/Header";

const TodaysTimeTable = () => {
  // 1 based index on week days, to get todays dayOdWeek
  const today = new Date().getDay();
  const { timeTable, isLoading } = useStudentContext();
  const todaySchedule = timeTable.get(Constants.common.weekdays[today - 1]);
  if (isLoading)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  const RenderPeriod = ({ period }) => {
    return (
      <View>
        <Text>{period.time}</Text>
        <Text>{period.subject}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header title={Constants.common.weekdays[today - 1]} />
      {todaySchedule.map((period) => (
        <RenderPeriod period={period} />
      ))}
    </View>
  );
};
export default TodaysTimeTable;
