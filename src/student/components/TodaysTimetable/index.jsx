import { Constants } from "@/src/common/constants";
import { useStudentContext } from "../../context/useStudentContext";
import { styles } from "./styles";
import { RefreshControl, ScrollView, Text, View } from "react-native";
import Header from "@/src/common/components/Header";
import RenderPeriod from "@/src/common/components/RenderPeriod";
import EmptyContent from "@/app/common/EmptyScreen";
import { useCallback, useState } from "react";

const TodaysTimeTable = () => {
  // index on week days, to get todays dayOdWeek
  const today = new Date().getDay();
  const { timeTable, isLoading, fetchLatestTimeTable } = useStudentContext();
  const todaySchedule = timeTable?.get(Constants.common.weekdays[today]) ?? [];

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

  if (isLoading)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Header title={Constants.common.weekdays[today]} />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {todaySchedule.length === 0 ? (
          <EmptyContent />
        ) : (
          <View style={styles.timeTableContainer}>
            {todaySchedule?.map((period, index) => (
              <RenderPeriod period={period} key={index} />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default TodaysTimeTable;
