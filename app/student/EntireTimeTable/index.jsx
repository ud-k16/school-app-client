import { styles } from "./styles";
import { ScrollView, Text, View } from "react-native";
import { Constants } from "@/src/common/constants";
import Header from "@/src/common/components/Header";
import { useStudentContext } from "@/src/student/context/useStudentContext";
import RenderPeriod from "@/src/common/components/RenderPeriod";

const EntireTimeTable = () => {
  const { timeTable } = useStudentContext();
  return (
    <View style={styles.container}>
      <Header title="Time Table " />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {Constants.common.weekdays.map((weekDay, index) => (
          <View style={styles.weekDayTextContainer}>
            <Text style={styles.weekDaysTextStyle}>{weekDay}</Text>
            {timeTable?.get(weekDay)?.map((period) => (
              <RenderPeriod period={period} />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default EntireTimeTable;
