import { useState } from "react";
import Constants from "expo-constants";
import { useTeacherContext } from "../context/useTeacherContext";
const useTimeTable = () => {
  const [state, setState] = useState({
    isLoading: false,
  });
  const { timeTable, classId } = useTeacherContext();
  const { API_URL } = Constants.expoConfig.extra;

  const publishTimeTable = async () => {
    // console.log({ id, timetable });

    try {
      setState((prev) => ({ ...prev, isLoading: true }));
      // modifying map to multidimention array to send to server
      const entries = Array.from(timeTable);
      const data = { id: classId, timeTable: entries };
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
      const response = await fetch(url, requestOptions);
      const result = await response.json();
      console.log("Response from server on publish of time table", result);
      // set loading indicator false
      setState((prev) => ({ ...prev, isLoading: false }));
    } catch (error) {
      console.log("Publish time table error", error);
    }
  };
  return {
    ...state,
    setState,
    publishTimeTable,
  };
};
export default useTimeTable;
