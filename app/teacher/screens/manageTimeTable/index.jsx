import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import Headers from "../../../common/components/Header";
import TimeBreak from "../../components/TimeBreak";
import useTimeTable from "../../hooks/useTimeTable";

const ManageTimeTable = () => {
  const { workDays, addPeriodModalVisibility, showModal, hideModal } =
    useTimeTable();
  return (
    <View style={styles.container}>
      <Headers title="Time Table" />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <TimeBreak
          dayOfWeek={workDays[0]}
          addPeriodModalVisibility={addPeriodModalVisibility}
          showModal={showModal}
          hideModal={hideModal}
        />
      </ScrollView>
    </View>
  );
};
export default ManageTimeTable;
