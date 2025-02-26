import { Constants } from "@/src/common/constants";
import { useStudentContext } from "../../context/useStudentContext";
import { styles } from "./styles";
import { Text, View } from "react-native";
import Header from "@/src/common/components/Header";
import RenderPeriod from "@/src/common/components/RenderPeriod";

const TodaysTimeTable = () => {
  // index on week days, to get todays dayOdWeek
  const today = new Date().getDay();
  const { timeTable, isLoading } = useStudentContext();
  const todaySchedule = timeTable?.get(Constants.common.weekdays[today]);
  if (isLoading)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Header title={Constants.common.weekdays[today]} />
      <View style={styles.timeTableContainer}>
        {todaySchedule?.map((period, index) => (
          <RenderPeriod period={period} key={index} />
        ))}
      </View>
    </View>
  );
};
export default TodaysTimeTable;
