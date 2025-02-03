import { Pressable } from "react-native";
import { styles } from "./styles";
import DropDown from "../../../common/components/DropDown";
import { ScrollView, Text, TextInput, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { useTeacherContext } from "../../context/useTeacherContext";

const PeriodInfoEdit = ({ hideModal = () => {}, day = "" }) => {
  const [subject, setSubject] = useState("");
  const timeOptions = [
    {
      label: "01",
      value: "01",
    },
    {
      label: "02",
      value: "02",
    },
    {
      label: "03",
      value: "03",
    },
    {
      label: "04",
      value: "04",
    },
    {
      label: "05",
      value: "05",
    },
    {
      label: "06",
      value: "06",
    },
    {
      label: "07",
      value: "07",
    },
    {
      label: "08",
      value: "08",
    },
    {
      label: "09",
      value: "09",
    },
    {
      label: "10",
      value: "10",
    },
    {
      label: "11",
      value: "11",
    },
    {
      label: "12",
      value: "12",
    },
  ];
  const minuteCreationFunction = () => {
    const minutesArray = [];
    for (let i = 0; i < 60; i++) {
      minutesArray.push({
        value: i < 10 ? `0${i}` : `${i}`,
        label: i < 10 ? `0${i}` : `${i}`, // Formatting minutes as "01", "02", ..., "59"
      });
    }
    return minutesArray;
  };
  const [startTime, setStartTime] = useState({ hr: "", min: "" });
  const [endTime, setEndTime] = useState({ hr: "", min: "" });
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
          onChangeText={(text) => setSubject(text)}
        />
        <Text style={styles.ORTextStyle}>OR</Text>
        <DropDown
          style={styles.textInputStyle}
          placeHolder="Course"
          placeHolderStyle={styles.dropdownPlaceHolderStyle}
        />
        <Text style={styles.inputTitleTextStyle}>Start Time</Text>
        <View style={styles.displayStack1}>
          <TextInput
            style={[styles.textInputStyle, styles.timeInput]}
            placeholder="hours"
            maxLength={2}
            onChangeText={(text) =>
              setStartTime((prev) => ({ hr: text, min: prev.min }))
            }
          />
          <TextInput
            style={[styles.textInputStyle, styles.timeInput]}
            placeholder="mins"
            maxLength={2}
            onChangeText={(text) =>
              setStartTime((prev) => ({ hr: prev.hr, min: text }))
            }
          />
        </View>
        <Text style={styles.inputTitleTextStyle}>End Time</Text>
        <View style={styles.displayStack1}>
          <TextInput
            style={[styles.textInputStyle, styles.timeInput]}
            placeholder="hours"
            maxLength={2}
            onChangeText={(text) =>
              setEndTime((prev) => ({ hr: text, min: prev.min }))
            }
          />
          <TextInput
            style={[styles.textInputStyle, styles.timeInput]}
            placeholder="mins"
            maxLength={2}
            onChangeText={(text) =>
              setEndTime((prev) => ({ hr: prev.hr, min: text }))
            }
          />
        </View>
        <Pressable
          style={styles.saveButtonStyle}
          onPress={() => {
            addPeriodOfDay({
              day,
              payload: {
                time: `${startTime.hr}:${startTime.min}-${endTime.hr}:${endTime.min}`,
                subject,
              },
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
