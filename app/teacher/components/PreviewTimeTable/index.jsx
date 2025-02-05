import { useTeacherContext } from "../../context/useTeacherContext";
import { styles } from "./styles";

import { View, Text } from "react-native";
const PreviewTimeTable = () => {
  const { timeTable, workDays } = useTeacherContext();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        {workDays.map(({ day, holiday }) => {
          return (
            <View>
              <Text>{day}</Text>
              {timeTable.get(day)?.map((period) => {
                return (
                  <View>
                    <Text>{period.time}</Text>
                    <Text>{period.subject}</Text>
                  </View>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default PreviewTimeTable;
