import { styles } from "./styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Pressable, Text, View } from "react-native";
import PeriodInfoEdit from "../PeriodInfoEdit";
import CustomModalComponent from "../../../common/components/Modal";
import { useTeacherContext } from "../../context/useTeacherContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Themes } from "@/app/utils/themes";
import usePeriodModal from "../../hooks/usePeriodModal";
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

      {timeTable.get(dayOfWeek)?.length > 0 &&
        timeTable.get(dayOfWeek)?.map((period, index) => {
          return (
            <View style={styles.periodDisplayCardContainer}>
              <View style={styles.displayStackData}>
                <Text style={styles.periodTextStyle}>{period.time}</Text>
                <Text style={styles.subjectTextStyle}>
                  {period.subject || "Assembly For The People Replublic"}
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
      <CustomModalComponent
        visibility={addPeriodModalVisibility}
        hideModal={hideModal}
      >
        <PeriodInfoEdit hideModal={hideModal} day={dayOfWeek} />
      </CustomModalComponent>
    </View>
  );
};
export default UpdatePeriodsForDay;
