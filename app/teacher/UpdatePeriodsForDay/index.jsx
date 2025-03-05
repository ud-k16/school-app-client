import moderateScale from "@/src/utils/responsiveScale";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import PeriodInfoEdit from "@/src/teacher/components/PeriodInfoEdit";
import { useTeacherContext } from "@/src/teacher/context/useTeacherContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Themes } from "@/src/utils/themes";
import usePeriodModal from "@/src/teacher/hooks/usePeriodModal";
import { useLocalSearchParams } from "expo-router/build/hooks";

const UpdatePeriodsForDay = () => {
  const { dayOfWeek = "Monday" } = useLocalSearchParams();
  const { timeTable, deletePeriodOfDay, swapUpPeriod, swapDownPeriod } =
    useTeacherContext();
  const { addPeriodModalVisibility, showModal, hideModal } = usePeriodModal();
  return (
    <View style={styles.container}>
      <View style={styles.displayStack1}>
        <Text style={styles.weekDayTextStyle}>{dayOfWeek}</Text>
        <Pressable style={styles.addButtonStyle} onPress={showModal}>
          <FontAwesome5 name="calendar-plus" size={24} color="black" />
          <Text style={styles.addButtonTextStyle}> Add </Text>
        </Pressable>
      </View>
      <ScrollView style={styles.scrollViewContainer}>
        {timeTable.get(dayOfWeek)?.length > 0 &&
          timeTable.get(dayOfWeek)?.map((period, index) => {
            return (
              <View style={styles.periodDisplayCardContainer} key={index}>
                <View style={styles.displayStackData}>
                  <Text style={styles.periodTextStyle}>{period.time}</Text>
                  <Text style={styles.subjectTextStyle}>
                    {period.subject || "Assembly "}
                  </Text>
                </View>
                <View style={styles.arrowContainer}>
                  {index !== 0 && (
                    <AntDesign
                      name="arrowup"
                      size={24}
                      color="black"
                      onPress={() => {
                        swapUpPeriod({ day: dayOfWeek, index });
                      }}
                    />
                  )}
                  {index + 1 !== timeTable.get(dayOfWeek)?.length && (
                    <AntDesign
                      name="arrowdown"
                      size={24}
                      color="black"
                      onPress={() => {
                        swapDownPeriod({ day: dayOfWeek, index });
                      }}
                    />
                  )}
                </View>

                <MaterialIcons
                  name="delete-outline"
                  size={24}
                  color={Themes.red}
                  onPress={() => {
                    deletePeriodOfDay({ day: dayOfWeek, time: period.time });
                  }}
                />
              </View>
            );
          })}
      </ScrollView>

      {addPeriodModalVisibility && (
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <PeriodInfoEdit hideModal={hideModal} day={dayOfWeek} />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    padding: moderateScale(15),
  },
  weekDayTextStyle: {
    fontWeight: 600,
    alignSelf: "center",
    height: "auto",
    fontSize: moderateScale(20),
    color: Themes.secondary,
    textTransform: "uppercase",
  },
  displayStack1: {
    padding: moderateScale(15),

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  addButtonStyle: {
    backgroundColor: Themes.white,
    borderRadius: moderateScale(5),
    width: "30%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: moderateScale(40),
    elevation: 6,
    shadowColor: Themes.greyShade,
    shadowOffset: moderateScale(15),
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  addButtonTextStyle: {
    fontWeight: 600,
    fontSize: moderateScale(15),
  },
  periodDisplayCardContainer: {
    marginBottom: moderateScale(10),
    alignSelf: "center",
    width: "99%",
    minHeight: moderateScale(60),
    flexDirection: "row",
    alignItems: "center",
    borderWidth: moderateScale(1),
    borderColor: Themes.greyShade,
    paddingHorizontal: moderateScale(10),
  },
  periodTextStyle: {
    color: Themes.textColor,
    fontSize: moderateScale(16),
  },
  subjectTextStyle: {
    color: Themes.secondary,
    fontSize: moderateScale(18),
    textTransform: "uppercase",
  },
  arrowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  displayStackData: {
    flex: 1,
  },
});
export default UpdatePeriodsForDay;
