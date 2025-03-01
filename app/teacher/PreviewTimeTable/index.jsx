import { useTeacherContext } from "@/src/teacher/context/useTeacherContext";
import { styles } from "./styles";
import Header from "@/src/common/components/Header";
import { useAuthContext } from "@/src/common/context/useAuthContext";
import { View, Text, ScrollView, Pressable } from "react-native";
import useTimeTable from "@/src/teacher/hooks/useTimeTable";
import RenderPeriod from "@/src/common/components/RenderPeriod";

const PreviewTimeTable = () => {
  const { timeTable, workDays } = useTeacherContext();
  const { user } = useAuthContext();
  const { isLoading, publishTimeTable } = useTimeTable();
  return (
    <View style={styles.container}>
      <Header title={"Preview"} />

      <ScrollView style={styles.scrollViewContainer}>
        <View>
          <Text>Class Id : {user?.classId}</Text>
          <Text>Class Teacher Name : {user?.name}</Text>
        </View>
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
