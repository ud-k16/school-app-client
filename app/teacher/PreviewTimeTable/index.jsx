import { useTeacherContext } from "@/src/teacher/context/useTeacherContext";

import moderateScale from "../../../src/utils/responsiveScale";
import { Themes } from "@/src/utils/themes";
import Header from "@/src/common/components/Header";
import { useAuthContext } from "@/src/common/context/useAuthContext";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
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
          onPress={
            isLoading
              ? null
              : () => {
                  publishTimeTable();
                }
          }
        >
          <Text style={styles.publishButtonTextStyle}>Publish</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingHorizontal: moderateScale(10),
  },
  dayTextStyle: {
    fontWeight: 600,
    fontSize: moderateScale(16),
    textTransform: "uppercase",
    color: Themes.textColor,
    marginTop: moderateScale(10),
  },
  displayStack1: {
    flexDirection: "row",
  },
  periodTextStyle: {
    color: Themes.textColor,
    textAlign: "right",
    flex: 1,
  },
  holidayText: {
    color: Themes.secondary,
    fontSize: moderateScale(14),
    textTransform: "uppercase",
  },
  publishButtonStyle: {
    backgroundColor: Themes.secondary,
    borderRadius: moderateScale(5),
    marginTop: moderateScale(20),
    width: "50%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: moderateScale(50),
    elevation: 6,
    shadowColor: Themes.greyShade,
    shadowOffset: moderateScale(15),
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  publishButtonTextStyle: {
    fontSize: moderateScale(16),
    color: Themes.white,
  },
});

export default PreviewTimeTable;
