import { useEffect, useState } from "react";
import Constants from "expo-constants";
import { useTeacherContext } from "../context/useTeacherContext";
import { useAuthContext } from "@/src/common/context/useAuthContext";
import { fetchWithTimeOut } from "@/src/utils/helperFunctions";
import { router } from "expo-router";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const useTimeTable = () => {
  const [state, setState] = useState({
    isLoading: false,
  });
  const { user } = useAuthContext();
  const { setItem: setTimeTableToLocal } = useAsyncStorage("timeTable");
  const { timeTable, setTimeTable } = useTeacherContext();
  const { API_URL } = Constants.expoConfig.extra;

  // function to add period to particular day
  const addPeriodOfDay = ({ day, payload }) => {
    // payload is an object with format {time:"",subject:""}
    setTimeTable((prev) => {
      //   retriving already available periods for the particular day
      const availablePeriods = prev.get(day) || [];
      //   adding in the new period
      availablePeriods.push({
        time: payload.time,
        subject: payload.subject,
      });
      //   updating the day and its periods
      prev.set(day, availablePeriods);
      return new Map(prev);
    });
  };

  // function to delete period to particular day
  const deletePeriodOfDay = ({ day, time }) => {
    setTimeTable((prev) => {
      //   retriving already available periods for the particular day
      const availablePeriods = prev.get(day) || [];
      //   deleting given time period
      const newPeriodSet = availablePeriods.filter(
        (period) => period.time !== time
      );
      //   updating the day and its periods
      prev.set(day, newPeriodSet);
      return new Map(prev);
    });
  };

  // function to swap up  period to particular day
  const swapUpPeriod = ({ day, index }) => {
    setTimeTable((prev) => {
      //   retriving already available periods for the particular day
      const availablePeriods = prev.get(day) || [];
      //   deleting given time period and previous state
      const deleted = availablePeriods.splice(index - 1, 2);

      // adding in the deleted times by swaping it
      availablePeriods.splice(index - 1, 0, deleted[1]);
      availablePeriods.splice(index, 0, deleted[0]);
      //   updating the day and its periods
      prev.set(day, availablePeriods);
      // return new updated timetable
      return new Map(prev);
    });
  };

  // function to swap down  period to particular day
  const swapDownPeriod = ({ day, index }) => {
    setTimeTable((prev) => {
      //   retriving already available periods for the particular day
      const availablePeriods = prev.get(day) || [];
      //   deleting given time period and previous state
      const deleted = availablePeriods.splice(index, 2);
      // adding in the deleted times by swaping it
      availablePeriods.splice(index, 0, deleted[1]);
      availablePeriods.splice(index + 1, 0, deleted[0]);
      //   updating the day and its periods
      prev.set(day, availablePeriods);
      return new Map(prev);
    });
  };

  const publishTimeTable = async () => {
    // console.log({ id, timetable });

    try {
      setState((prev) => ({ ...prev, isLoading: true }));
      // modifying map to multidimention array to send to server
      const entries = Array.from(timeTable);
      const data = { id: user?.classId, timeTable: entries };
      console.log("sending time table data to server : ", data);
      // request option object
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const url = `${API_URL}/timetable/publish`;
      const response = await fetchWithTimeOut({ url, requestOptions });
      const result = await response.json();
      console.log("Response from server on publish of time table", result);
      // set loading indicator false
      setState((prev) => ({ ...prev, isLoading: false }));
      // show success
      router.navigate("/common/publish/successful");
    } catch (error) {
      console.log("Publish time table error", error);
      setState((prev) => ({ ...prev, isLoading: false }));
      // show failure
      router.navigate("/common/publish/failure");
    }
  };
  useEffect(() => {
    // changes in the time table are added to local storage
    setTimeTableToLocal(JSON.stringify(timeTable));
  }, [timeTable?.size]);
  return {
    ...state,
    setState,
    addPeriodOfDay,
    deletePeriodOfDay,
    swapDownPeriod,
    swapUpPeriod,
    publishTimeTable,
  };
};
export default useTimeTable;
