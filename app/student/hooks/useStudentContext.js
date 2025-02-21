import { createContext, useContext, useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import { useAuthContext } from "@/app/common/context/useAuthContext";

const StudentContext = createContext();

const StudentContextProvider = ({ children }) => {
  const { getItem: getTimeTable, setItem: setTimeTable } =
    useAsyncStorage("timeTable");
  const { user } = useAuthContext();
  const [state, setState] = useState({
    isLoading: true,
    timeTable: null,
  });

  // get api url from extra field of expo
  const { API_URL } = Constants.expoConfig.extra;

  const isTimeTableAvailable = async () => {
    // check if time table list available in local storage
    console.log("check if time table list available in local storage");
    // get if list available in local storage
    const timeTableInStorage = await getTimeTable();
    console.log("time Table in local storage", timeTableInStorage);

    if (JSON.parse(timeTableInStorage))
      setState((prev) => {
        return {
          ...prev,
          timeTable: JSON.parse(timeTableInStorage),
        };
      });
    else {
      await fetchLatestTimeTable();
    }
    setState((prev) => ({ ...prev, isLoading: false }));
  };
  const fetchLatestTimeTable = async (id = "9") => {
    console.log("fetching  time table for id  from server");
    const data = {
      id,
    };
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(
        `${API_URL}/timetable/fetch`,
        requestOptions
      );

      const result = await response.json();
      console.log("time table for class fetched", result);

      if (result?.status) {
        // get timetable list from local storage
        const timeTableInStorage = await getTimeTable();
        let updatedList = [];
        if (timeTableInStorage) {
          updatedList = [
            ...JSON.parse(timeTableInStorage, {
              id: result.data.id,
              timetable: result.data.timetable,
            }),
          ];
        }
        await setTimeTable(JSON.stringify(updatedList));

        setState((prev) => ({
          ...prev,
          timeTable: new Map(result.data.timetable),
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    isTimeTableAvailable();
  }, [user?.classId]);
  return (
    <StudentContext.Provider value={{ ...state, setState }}>
      {children}
    </StudentContext.Provider>
  );
};
export const useStudentContext = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("Error using Context");
  }
  return context;
};
export default StudentContextProvider;
