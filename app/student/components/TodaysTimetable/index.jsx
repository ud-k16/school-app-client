import { useDataContext } from "../../../common/context/useDataContext";
import { styles } from "./styles";
import { View } from "react-native";

const TodaysTimeTable = () => {
  const { timeTable } = useDataContext();
  console.log(timeTable);

  return <View style={styles.container}></View>;
};
export default TodaysTimeTable;
