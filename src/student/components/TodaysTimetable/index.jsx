import { Constants } from "@/src/common/constants";
import { useStudentContext } from "../../context/useStudentContext";
import { styles } from "./styles";
import { RefreshControl, ScrollView, Text, View } from "react-native";
import Header from "@/src/common/components/Header";
import RenderPeriod from "@/src/common/components/RenderPeriod";
import EmptyContent from "@/app/common/EmptyScreen";
import { useEffect, useState } from "react";

const TodaysTimeTable = () => {
  // index on week days, to get todays dayOdWeek
  const today = new Date().getDay();
  const { timeTable, isLoading, setState, fetchLatestTimeTable } =
    useStudentContext();
  const todaySchedule = timeTable?.get(Constants.common.weekdays[today]) ?? [];

  useEffect(() => {
    loadTimeTable();
  }, []);

  const loadTimeTable = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    await fetchLatestTimeTable();
    setState((prev) => ({ ...prev, isLoading: false }));
  };

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
          <RefreshControl refreshing={isLoading} onRefresh={loadTimeTable} />
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
