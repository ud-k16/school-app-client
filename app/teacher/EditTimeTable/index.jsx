import { ScrollView, View, StyleSheet, Pressable, Text } from "react-native";
import BasicInfo from "@/src/teacher/components/BasicInfo";
import WorkDays from "@/src/teacher/components/WorkDays";
import Header from "@/src/common/components/Header";
import moderateScale from "@/src/utils/responsiveScale";
import { Themes } from "@/src/utils/themes";
import { router } from "expo-router";

const EditTimeTable = () => {
  return (
    <View style={styles.container}>
      <Header title="Time Table" />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <BasicInfo />
        <WorkDays />
      </ScrollView>
      <Pressable
        style={styles.previewButtonStyle}
        onPress={() => {
          router.navigate({
            pathname: "/teacher/PreviewTimeTable",
          });
        }}
      >
        <Text style={styles.previewButtonTextStyle}>Preview</Text>
      </Pressable>
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
  previewButtonStyle: {
    backgroundColor: Themes.secondary,
    borderRadius: moderateScale(5),
    marginVertical: moderateScale(10),
    width: moderateScale(150),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: moderateScale(50),
    elevation: 6,
    shadowColor: Themes.greyShade,
    shadowOffset: moderateScale(15),
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  previewButtonTextStyle: {
    fontWeight: 600,
    fontSize: moderateScale(20),
    color: Themes.white,
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
