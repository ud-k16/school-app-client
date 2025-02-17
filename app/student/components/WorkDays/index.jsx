import { styles } from "./styles";
import { Pressable, ScrollView, Text, View } from "react-native";

import { Themes } from "@/app/utils/themes";
import { Link, router } from "expo-router";
import { Constants } from "../../../common/constants";
import Header from "@/app/common/components/Header";

const WorkDays = () => {
  return (
    <View style={styles.container}>
      <Header title="Week Days" />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {Constants.common.weekdays.map((weekDays, index) => (
          <Pressable
            style={styles.weekDayTextContainer}
            key={index}
            onPress={() => {
              router.navigate({
                pathname: "/teacher/components/UpdatePeriodsForDay",
                params: { dayOfWeek: weekDays },
              });
            }}
          >
            <Text style={styles.weekDaysTextStyle}>{weekDays}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};
export default WorkDays;
