import { ScrollView, View, StyleSheet } from "react-native";
import BasicInfo from "@/src/teacher/components/BasicInfo";
import WorkDays from "@/src/teacher/components/WorkDays";
import Header from "@/src/common/components/Header";
import moderateScale from "@/src/utils/responsiveScale";
import { Themes } from "@/src/utils/themes";

const EditTimeTable = () => {
  return (
    <View style={styles.container}>
      <Header title="Time Table" />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <BasicInfo />
        <WorkDays />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollViewContainer: {
    flexGrow: 1,
    rowGap: moderateScale(10),
  },
  textInputStyle: {
    alignSelf: "center",
    width: "90%",
    height: moderateScale(60),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(5),
    paddingHorizontal: moderateScale(10),
  },
  actionableButtonStyle: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Themes.secondary,
    width: "60%",
    height: moderateScale(50),
    borderRadius: moderateScale(5),
  },
  actionableButtonTextStyle: {
    color: Themes.white,
  },
});

export default EditTimeTable;
