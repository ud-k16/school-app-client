import { Pressable } from "react-native";
import { styles } from "./styles";
import DropDown from "../../../common/components/DropDown";
import { ScrollView, Text, TextInput, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useTeacherContext } from "../../context/useTeacherContext";
import usePeriodModal from "../../hooks/usePeriodModal";
import moderateScale from "@/app/utils/responsiveScale";

const PeriodInfoEdit = ({ hideModal = () => {}, day = "" }) => {
  const {
    subjectError,
    startTimeError,
    endTimeError,
    hoursOptions,
    timemeridiam,
    setState,
    addValidPeriodDataToRespectiveDay,
    minuteCreationFunction,
  } = usePeriodModal();
  const { addPeriodOfDay } = useTeacherContext();
  return (
    <View style={styles.container}>
      <AntDesign
        name="closecircleo"
        size={35}
        color="black"
        style={styles.closeIconStyle}
        onPress={hideModal}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Period Name  (ex.)Assembly"
          onChangeText={(text) =>
            setState((prev) => ({ ...prev, subject: text }))
          }
        />
        <Text style={styles.ORTextStyle}>OR</Text>
        <DropDown
          style={styles.textInputStyle}
          placeHolder="Course"
          placeHolderStyle={styles.dropdownPlaceHolderStyle}
        />
        <Text style={styles.errorTextStyle}>{subjectError}</Text>
        <Text style={styles.inputTitleTextStyle}>Start Time</Text>
        <View style={styles.displayStack1}>
          <DropDown
            style={styles.timeInput}
            data={hoursOptions}
            placeHolder="hours"
            containerStyle={{ height: moderateScale(160) }}
            onChange={(text) =>
              setState((prev) => ({
                ...prev,
                startTime: { ...prev.startTime, hr: text },
              }))
            }
          />
          <DropDown
            style={styles.timeInput}
            containerStyle={{ height: moderateScale(160) }}
            placeHolder="mins"
            data={minuteCreationFunction()}
            onChange={(text) =>
              setState((prev) => ({
                ...prev,
                startTime: { ...prev.startTime, min: text },
              }))
            }
          />
          <DropDown
            style={styles.timeInput}
            data={timemeridiam}
            placeHolder="am/pm"
            onChange={(text) =>
              setState((prev) => ({
                ...prev,
                startTime: {
                  ...prev.startTime,
                  meridiam: text,
                },
              }))
            }
          />
        </View>
        <Text style={styles.errorTextStyle}>{startTimeError}</Text>

        <Text style={styles.inputTitleTextStyle}>End Time</Text>
        <View style={styles.displayStack1}>
          <DropDown
            style={styles.timeInput}
            data={hoursOptions}
            containerStyle={{ height: moderateScale(160) }}
            placeHolder="hours"
            onChange={(text) =>
              setState((prev) => ({
                ...prev,
                endTime: { ...prev.endTime, hr: text },
              }))
            }
          />
          <DropDown
            style={styles.timeInput}
            placeHolder="mins"
            data={minuteCreationFunction()}
            containerStyle={{ height: moderateScale(160) }}
            onChange={(text) =>
              setState((prev) => ({
                ...prev,
                endTime: { ...prev.endTime, min: text },
              }))
            }
          />
          <DropDown
            style={styles.timeInput}
            placeHolder="am/pm"
            data={timemeridiam}
            onChange={(text) =>
              setState((prev) => ({
                ...prev,
                endTime: { ...prev.endTime, meridiam: text },
              }))
            }
          />
        </View>
        <Text style={styles.errorTextStyle}>{endTimeError}</Text>

        <Pressable
          style={styles.saveButtonStyle}
          onPress={() => {
            addValidPeriodDataToRespectiveDay({
              day,
              callback: addPeriodOfDay,
            });
          }}
        >
          <Text style={styles.saveButtonTextStyle}>Save</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};
export default PeriodInfoEdit;
