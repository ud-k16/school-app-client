import { styles } from "./styles";
import { useTeacherContext } from "../../context/useTeacherContext";
import { Pressable, ScrollView, Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import { Themes } from "@/app/utils/themes";
import { Link, router } from "expo-router";

const WorkDays = () => {
  const { workDays, toggleHolidayFlag } = useTeacherContext();

  return (
    <View style={styles.container}>
      <Text style={styles.headingTextStyle}>Edit TimeTable</Text>
      <Text style={styles.holidayTextStyle}> Holiday</Text>
      <View>
        {workDays.map((weekDays, index) => (
          <View style={styles.displayStack1} key={index}>
            <Text style={styles.weekDaysTextStyle}>{weekDays.day}</Text>
            <View style={styles.displayStack2}>
              <Pressable
                onPress={
                  weekDays.holiday
                    ? null
                    : () => {
                        router.navigate({
                          pathname: "/teacher/components/UpdatePeriodsForDay",
                          params: { dayOfWeek: weekDays.day },
                        });
                      }
                }
              >
                <FontAwesome5
                  name="edit"
                  size={24}
                  color={weekDays.holiday ? Themes.greyShade : "black"}
                />
              </Pressable>

              <Pressable
                style={styles.checkBoxStyle}
                onPress={() => {
                  toggleHolidayFlag(weekDays.day);
                }}
              >
                {weekDays.holiday && (
                  <Entypo
                    name="check"
                    size={25}
                    color={Themes.lightFadedGreen}
                  />
                )}
              </Pressable>
            </View>
          </View>
        ))}
      </View>
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
