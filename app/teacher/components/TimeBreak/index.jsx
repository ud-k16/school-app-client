import { styles } from "./styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Pressable, Text, View } from "react-native";
import PeriodInfoEdit from "../PeriodInfoEdit";
import CustomModalComponent from "../../../common/components/Modal";

const TimeBreak = ({
  dayOfWeek = "",
  addPeriodModalVisibility = false,
  showModal = () => {},
  hideModal = () => {},
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.weekDayTextStyle}>{dayOfWeek}</Text>
      <Pressable style={styles.addButtonStyle} onPress={showModal}>
        <FontAwesome5 name="calendar-plus" size={24} color="black" />
        <Text style={styles.addButtonTextStyle}> Add Period </Text>
      </Pressable>
      <CustomModalComponent
        visibility={addPeriodModalVisibility}
        hideModal={hideModal}
      >
        <PeriodInfoEdit hideModal={hideModal} />
      </CustomModalComponent>
    </View>
  );
};
export default TimeBreak;
