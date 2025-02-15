import { useTeacherContext } from "../../context/useTeacherContext";
import { styles } from "./styles";
import Headers from "../../../common/components/Header";
import { View, Text, ScrollView, Pressable } from "react-native";
import useTimeTable from "../../hooks/useTimeTable";

const PreviewTimeTable = () => {
  const { timeTable, workDays } = useTeacherContext();
  const { isLoading, publishTimeTable } = useTimeTable();
  return (
    <View style={styles.container}>
      <Headers title="Preview" />
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
        <Pressable
          style={styles.publishButtonStyle}
          onPress={() => {
            publishTimeTable({ id: 8, timeTable });
          }}
        >
          <Text style={styles.publishButtonTextStyle}>Publish</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};
export default PreviewTimeTable;
