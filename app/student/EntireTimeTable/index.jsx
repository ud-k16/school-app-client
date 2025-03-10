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
import { useEffect } from "react";

const EntireTimeTable = () => {
  const { timeTable, isLoading, setState, fetchLatestTimeTable } =
    useStudentContext();

  useEffect(() => {
    loadTimeTable();
  }, []);

  const loadTimeTable = async () => {
    try {
      setState((prev) => ({ ...prev, isLoading: true }));
      await fetchLatestTimeTable();
      setState((prev) => ({ ...prev, isLoading: false }));
    } catch (error) {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Time Table " />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={loadTimeTable} />
        }
      >
        {Constants.common.weekdays.map((weekDay, index) => (
          <View style={styles.weekDayTextContainer} key={index}>
            <Text style={styles.weekDaysTextStyle}>{weekDay}</Text>
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
    fontSize: moderateScale(20),
    color: Themes.textColor,
    width: "100%",
  },
});

export default EntireTimeTable;
