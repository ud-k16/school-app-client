import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Constants } from "@/src/common/constants";
import Header from "@/src/common/components/Header";
import { useTeacherContext } from "@/src/teacher/context/useTeacherContext";
import RenderPeriod from "@/src/common/components/RenderPeriod";
import moderateScale from "@/src/utils/responsiveScale";
import { Themes } from "@/src/utils/themes";
import { useEffect } from "react";

const EntireTimeTable = () => {
  const { timeTablePosted, isLoading, fetchLatestTimeTable } =
    useTeacherContext();

  useEffect(() => {
    fetchLatestTimeTable();
  }, []);

  if (isLoading)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <Header title="Time Table " />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {Constants.common.weekdays.map((weekDay, index) => (
          <View key={index}>
            <Text style={styles.weekDaysTextStyle}>{weekDay}</Text>
            {timeTablePosted.get(weekDay) ? (
              timeTablePosted
                .get(weekDay)
                ?.map((period) => <RenderPeriod period={period} />)
            ) : (
              <Text style={styles.holidayText}>Holiday</Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: moderateScale(10),
  },
  scrollViewContainer: {
    flexGrow: 1,
    rowGap: moderateScale(10),
  },
  weekDayTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    minHeight: moderateScale(60),
    marginBottom: moderateScale(10),
  },
  weekDaysTextStyle: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: moderateScale(20),
    color: Themes.textColor,
    width: "100%",
  },
  holidayText: {
    color: Themes.secondary,
    fontSize: moderateScale(14),
    textTransform: "uppercase",
  },
});

export default EntireTimeTable;
