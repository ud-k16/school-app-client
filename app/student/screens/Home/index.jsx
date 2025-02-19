import TodaysTimeTable from "../../components/TodaysTimetable";
import { styles } from "./styles";

import { View } from "react-native";
import Header from "@/app/common/components/Header";
import { Constants } from "@/app/common/constants/index";

const StudentHome = () => {
  // 1 based index on week days, to get todays dayOdWeek
  const today = new Date().getDay();
  return (
    <View style={styles.container}>
      <Header title={Constants.common.weekdays[today - 1]} />
      <TodaysTimeTable />
    </View>
  );
};
export default StudentHome;
