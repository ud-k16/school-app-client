import { Pressable, StyleSheet, Text, View } from "react-native";
import { Themes } from "@/src/utils/themes";
import moderateScale from "@/src/utils/responsiveScale";

import { MaterialIcons } from "@expo/vector-icons";
const ServerDown = ({ retry = () => {} }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="report-gmailerrorred"
        size={44}
        color={styles.iconStyle.color}
      />
      <Text style={styles.textStyle}>Server Down </Text>
      <Pressable
        style={styles.backButton}
        onPress={() => {
          retry();
        }}
      >
        <Text>Back</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    color: Themes.lightFadedGreen,
  },
  textStyle: {
    fontWeight: 600,
    fontSize: moderateScale(20),
  },
  backButton: {
    width: moderateScale(150),
    alignItems: "center",
    justifyContent: "center",
    marginTop: moderateScale(40),
    borderWidth: 1,
    borderRadius: moderateScale(5),
    height: moderateScale(35),
  },
});
export default ServerDown;
