import { useState } from "react";
import Constants from "expo-constants";
import { useTeacherContext } from "../context/useTeacherContext";
import { useAuthContext } from "@/src/common/context/useAuthContext";
import { fetchWithTimeOut } from "@/src/utils/helperFunctions";
import { router } from "expo-router";

const useTimeTable = () => {
  const [state, setState] = useState({
    isLoading: false,
  });
  const { user } = useAuthContext();
  const { timeTable } = useTeacherContext();
  const { API_URL } = Constants.expoConfig.extra;

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
      router.navigate("/common/successful");
    } catch (error) {
      console.log("Publish time table error", error);
      setState((prev) => ({ ...prev, isLoading: false }));
      // show failure
      router.navigate("/common/failure");
    }
  };
  return {
    ...state,
    setState,
    publishTimeTable,
  };
};
export default useTimeTable;
