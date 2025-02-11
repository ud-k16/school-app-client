import { useTeacherContext } from "../../context/useTeacherContext";
import { styles } from "./styles";

import { View, Text, ScrollView } from "react-native";
const PreviewTimeTable = () => {
  const { timeTable, workDays } = useTeacherContext();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        {workDays.map(({ day, holiday }, index) => {
          return (
            <View key={index}>
              <Text style={styles.dayTextStyle}>{day}</Text>
              {holiday ? (
                <Text style={styles.holidayText}>Holiday</Text>
              ) : (
                <View>
                  {timeTable.get(day)?.map((period) => {
                    return (
                      <View style={styles.displayStack1}>
                        <Text style={styles.periodTextStyle}>
                          {period.time}
                        </Text>
                        <Text style={styles.periodTextStyle}>
                          {period.subject}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default PreviewTimeTable;
