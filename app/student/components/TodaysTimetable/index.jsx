import { Constants } from "@/app/common/constants";
import { useStudentContext } from "../../context/useStudentContext";
import { styles } from "./styles";
import { Text, View } from "react-native";
import Header from "@/app/common/components/Header";
import RenderPeriod from "@/app/common/components/RenderPeriod";

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
        {todaySchedule?.map((period) => (
          <RenderPeriod period={period} />
        ))}
      </View>
    </View>
  );
};
export default TodaysTimeTable;
