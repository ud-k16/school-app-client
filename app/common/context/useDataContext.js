import { createContext, useContext, useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const { getItem: getTimeTable, setItem: setTimeTable } =
    useAsyncStorage("timeTable");
  const [state, setState] = useState({
    isLoading: true,
    timeTable: null,
  });
  const { API_URL } = Constants.expoConfig.extra;

  const isTimeTableAvailable = async () => {
    const timeTableInStorage = await getTimeTable();

    if (timeTableInStorage)
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
  const fetchLatestTimeTable = async (id) => {
    const data = {
      id,
    };
    try {
      const requestOptions = {
        method: "GET",
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
      if (result?.status) {
        await setTimeTable(JSON.stringify(result.data));
        setState((prev) => ({
          ...prev,
          timeTable: new Map(result.data),
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    isTimeTableAvailable();
  }, []);
  return (
    <DataContext.Provider value={{ ...state, setState }}>
      {children}
    </DataContext.Provider>
  );
};
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Error using Context");
  }
  return context;
};
export default DataContextProvider;
