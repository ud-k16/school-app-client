import { useTeacherContext } from "@/src/teacher/context/useTeacherContext";
import { styles } from "./styles";
import Header from "@/src/common/components/Header";
import { View, Text, ScrollView, Pressable } from "react-native";
import useTimeTable from "@/src/teacher/hooks/useTimeTable";
import RenderPeriod from "@/src/common/components/RenderPeriod";

const PreviewTimeTable = () => {
  const { timeTable, workDays, classId, mentorName } = useTeacherContext();
  const { isLoading, publishTimeTable } = useTimeTable();
  return (
    <View style={styles.container}>
      <Header title="Preview" />
      <Text>{classId}</Text>
      <Text>{mentorName}</Text>
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
                    return <RenderPeriod period={period} />;
                  })}
                </View>
              )}
            </View>
          );
        })}
        <Pressable
          style={styles.publishButtonStyle}
          onPress={() => {
            publishTimeTable();
          }}
        >
          <Text style={styles.publishButtonTextStyle}>Publish</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};
export default PreviewTimeTable;
