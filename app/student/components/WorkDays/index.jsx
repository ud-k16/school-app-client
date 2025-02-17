import { styles } from "./styles";
import { Pressable, ScrollView, Text, View } from "react-native";

import { Themes } from "@/app/utils/themes";
import { Link, router } from "expo-router";
import { Constants } from "../../../common/constants";

const WorkDays = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {Constants.common.weekdays.map((weekDays, index) => (
          <Pressable
            style={styles.weekDayTextStyle}
            key={index}
            onPress={() => {
              router.navigate({
                pathname: "/teacher/components/UpdatePeriodsForDay",
                params: { dayOfWeek: weekDays },
              });
            }}
          >
            <Text style={styles.weekDaysTextStyle}>{weekDays.day}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <Pressable
        style={styles.previewButtonStyle}
        onPress={() => {
          router.navigate({
            pathname: "/teacher/components/PreviewTimeTable",
          });
        }}
      >
        <Text style={styles.previewButtonTextStyle}>Preview</Text>
      </Pressable>
    </View>
  );
};
export default WorkDays;
