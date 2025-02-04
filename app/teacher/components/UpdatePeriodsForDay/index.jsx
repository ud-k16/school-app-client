import { styles } from "./styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Pressable, Text, View } from "react-native";
import PeriodInfoEdit from "../PeriodInfoEdit";
import CustomModalComponent from "../../../common/components/Modal";
import { useTeacherContext } from "../../context/useTeacherContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Themes } from "@/app/utils/themes";

const UpdatePeriodsForDay = ({
  dayOfWeek = "",
  addPeriodModalVisibility = false,
  showModal = () => {},
  hideModal = () => {},
}) => {
  const { timeTable, deletePeriodOfDay } = useTeacherContext();
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
        timeTable.get(dayOfWeek)?.map((period) => {
          return (
            <View style={styles.periodDisplayCardContainer}>
              <View>
                <Text style={styles.periodTextStyle}>{period.time}</Text>
                <Text>{period.subject || "Assembly"}</Text>
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
