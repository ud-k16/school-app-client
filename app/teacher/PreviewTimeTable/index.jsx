import { useTeacherContext } from "@/src/teacher/context/useTeacherContext";

import moderateScale from "../../../src/utils/responsiveScale";
import { Themes } from "@/src/utils/themes";
import { Constants } from "@/src/common/constants";
import Header from "@/src/common/components/Header";
import { useAuthContext } from "@/src/common/context/useAuthContext";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import useTimeTable from "@/src/teacher/hooks/useTimeTable";
import RenderPeriod from "@/src/common/components/RenderPeriod";

const PreviewTimeTable = () => {
  const { timeTable } = useTeacherContext();
  const { user } = useAuthContext();
  const { isLoading, publishTimeTable } = useTimeTable();
  return (
    <View style={styles.container}>
      <Header title={"Preview"} />

      <ScrollView style={styles.scrollViewContainer}>
        <View style={{ marginVertical: moderateScale(10) }}>
          <Text>Class Id : {user?.classId}</Text>
          <Text>Class Teacher Name : {user?.name}</Text>
        </View>
        {Constants.common.weekdays.map((day, index) => {
          return (
            <View key={index}>
              <Text style={styles.dayTextStyle}>{day}</Text>
              {timeTable.get(day) ? (
                <View>
                  {timeTable.get(day)?.map((period, periodIndex) => {
                    return <RenderPeriod period={period} key={periodIndex} />;
                  })}
                </View>
              ) : (
                <Text style={styles.holidayText}>Holiday</Text>
              )}
            </View>
          );
        })}
      </ScrollView>
      <Pressable
        style={styles.publishButtonStyle}
        onPress={
          isLoading
            ? null
            : () => {
                publishTimeTable();
              }
        }
      >
        <Text style={styles.publishButtonTextStyle}>Publish</Text>
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
    paddingHorizontal: moderateScale(10),
  },
  dayTextStyle: {
    fontWeight: 600,
    fontSize: moderateScale(16),
    textTransform: "uppercase",
    color: Themes.textColor,
    marginTop: moderateScale(10),
  },
  displayStack1: {
    flexDirection: "row",
  },
  periodTextStyle: {
    color: Themes.textColor,
    textAlign: "right",
    flex: 1,
  },
  holidayText: {
    color: Themes.secondary,
    fontSize: moderateScale(14),
    textTransform: "uppercase",
  },
  publishButtonStyle: {
    backgroundColor: Themes.secondary,
    borderRadius: moderateScale(5),
    marginTop: moderateScale(20),
    width: moderateScale(150),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: moderateScale(40),
    elevation: 6,
    shadowColor: Themes.greyShade,
    shadowOffset: moderateScale(15),
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginVertical: moderateScale(10),
  },
  publishButtonTextStyle: {
    fontSize: moderateScale(16),
    color: Themes.white,
  },
});

export default PreviewTimeTable;
