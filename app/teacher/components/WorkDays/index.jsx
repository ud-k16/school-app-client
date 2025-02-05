import { styles } from "./styles";
import { useTeacherContext } from "../../context/useTeacherContext";
import { Pressable, ScrollView, Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import { Themes } from "@/app/utils/themes";
import { Link } from "expo-router";

const WorkDays = ({ navigation }) => {
  const { workDays, toggleHolidayFlag } = useTeacherContext();

  return (
    <View style={styles.container}>
      <Text style={styles.holidayTextStyle}> Holiday</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {workDays.map((weekDays, index) => (
          <Link
            key={index}
            href={{
              pathname: "/teacher/components/UpdatePeriodsForDay",
              params: { dayOfWeek: weekDays.day },
            }}
          >
            <View style={styles.displayStack1}>
              <Text style={styles.weekDaysTextStyle}>{weekDays.day}</Text>
              <View style={styles.displayStack2}>
                <FontAwesome5 name="edit" size={24} color="black" />
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
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};
export default WorkDays;
