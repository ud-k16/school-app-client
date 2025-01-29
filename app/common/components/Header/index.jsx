import { styles } from "./styles";

import { Text, View } from "react-native";
const Header = ({ title = "" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleTextStyle}>{title}</Text>
    </View>
  );
};
export default Header;
