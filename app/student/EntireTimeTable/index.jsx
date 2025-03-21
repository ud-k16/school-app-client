import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Constants } from "@/src/common/constants";
import Header from "@/src/common/components/Header";
import { useStudentContext } from "@/src/student/context/useStudentContext";
import RenderPeriod from "@/src/common/components/RenderPeriod";
import moderateScale from "@/src/utils/responsiveScale";
import { Themes } from "@/src/utils/themes";
import { useState, useCallback } from "react";

const EntireTimeTable = () => {
  const { timeTable, fetchLatestTimeTable } = useStudentContext();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await fetchLatestTimeTable();
    } catch (error) {
      // log error
      console.log(error.message);
    } finally {
      setRefreshing(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Time Table " />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {Constants.common.weekdays.map((weekDay, index) => (
          <View style={styles.weekDayTextContainer} key={index}>
            {timeTable?.get(weekDay) ? (
              <Text style={styles.weekDaysTextStyle}>{weekDay}</Text>
            ) : (
              <Text children="Holiday" />
            )}
            {timeTable?.get(weekDay)?.map((period, index) => (
              <RenderPeriod period={period} key={index} />
            ))}
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
    fontSize: moderateScale(15),
    color: Themes.textColor,
    width: "100%",
  },
});

export default EntireTimeTable;
