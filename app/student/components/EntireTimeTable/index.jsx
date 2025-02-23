import { styles } from "./styles";
import { ScrollView, Text, View } from "react-native";
import { Constants } from "../../../common/constants";
import Header from "@/app/common/components/Header";
import { useStudentContext } from "@/app/student/context/useStudentContext";
import RenderPeriod from "@/app/common/components/RenderPeriod";

const EntireTimeTable = () => {
  const { timeTable } = useStudentContext();
  return (
    <View style={styles.container}>
      <Header title="Time Table " />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {Constants.common.weekdays.map((weekDay, index) => (
          <View>
            <Text>{weekDay}</Text>
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
