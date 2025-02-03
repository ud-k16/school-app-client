import { styles } from "./styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Pressable, Text, View } from "react-native";
import PeriodInfoEdit from "../PeriodInfoEdit";
import CustomModalComponent from "../../../common/components/Modal";
import { useTeacherContext } from "../../context/useTeacherContext";

const TimeBreak = ({
  dayOfWeek = "",
  addPeriodModalVisibility = false,
  showModal = () => {},
  hideModal = () => {},
}) => {
  const { timeTable } = useTeacherContext();
  return (
    <View style={styles.container}>
      <Text style={styles.weekDayTextStyle}>{dayOfWeek}</Text>
      <Pressable style={styles.addButtonStyle} onPress={showModal}>
        <FontAwesome5 name="calendar-plus" size={24} color="black" />
        <Text style={styles.addButtonTextStyle}> Add Period </Text>
      </Pressable>
      <Text>{timeTable.get(dayOfWeek)?.toString()}</Text>
      <CustomModalComponent
        visibility={addPeriodModalVisibility}
        hideModal={hideModal}
      >
        <PeriodInfoEdit hideModal={hideModal} day={dayOfWeek} />
      </CustomModalComponent>
    </View>
  );
};
export default TimeBreak;
