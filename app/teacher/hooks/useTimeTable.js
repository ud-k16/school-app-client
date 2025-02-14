import { useState } from "react";
import Constants from "expo-constants";
const useTimeTable = () => {
  const [state, setState] = useState({
    isLoading: false,
  });
  const { API_URL } = Constants.expoConfig.extra;

  const publishTimeTable = async () => {
    try {
      setState((prev) => ({ ...prev, isLoading: true }));
      const data = {};
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
      setState((prev) => ({ ...prev, isLoading: false }));
    } catch (error) {
      console.log(error);
    }
  };
  return {
    ...state,
    setState,
    publishTimeTable,
  };
};
export default useTimeTable;
