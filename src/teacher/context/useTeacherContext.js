import { useAuthContext } from "@/src/common/context/useAuthContext";
import { fetchWithTimeOut } from "@/src/utils/helperFunctions";
import { createContext, useContext, useEffect, useState } from "react";
import Constants from "expo-constants";

const TeacherContext = createContext();

const TeacherContextProvider = ({ children }) => {
  // get api url from extra field of expo
  const { API_URL } = Constants.expoConfig.extra;
  const [state, setState] = useState({
    isLoading: true,
    course: null,
  });
  const { user } = useAuthContext();
  // variable to hold info about working weekdays in the timetable
  const [workDays, setWorkDays] = useState([
    { day: "monday", holiday: false },
    { day: "tuesday", holiday: false },
    { day: "wednesday", holiday: false },
    { day: "thursday", holiday: false },
    { day: "friday", holiday: false },
    { day: "saturday", holiday: true },
    { day: "sunday", holiday: true },
  ]);

  // variable that holds periods data for the respective day
  const [timeTable, setTimeTable] = useState(new Map());
  // basic info holding
  const [basicInfo, setBasicInfo] = useState({
    classId: "",
    mentorName: "",
  });

  // toggle holiday flag function
  const toggleHolidayFlag = (day) => {
    setWorkDays((prev) => {
      const index = prev.findIndex((value) => value.day === day);
      prev[index].holiday = !prev[index].holiday;
      return [...prev];
    });
  };
  // function to mark a day as working day
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

  const fetchLatestTimeTable = async () => {
    // console.log(
    //   "Fetching  time table for class id from server for teacher",
    //   user?.classId
    // );
    const data = {
      id: user?.classId,
    };
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const response = await fetchWithTimeOut({
        url: `${API_URL}/timetable/fetch`,
        requestOptions,
      });
      if (response) {
        const result = await response.json();
        // console.log("time table for class fetched", result);

        if (result?.status) {
          //  storing fetched time table to local storage
          // await setTimeTable(JSON.stringify(result?.data.time_table));

          setTimeTable((prev) => ({
            ...prev,
            timeTable: new Map(result.data.time_table),
          }));
        }
      }
    } catch (error) {
      console.log("Fetch Latest Time Table Error", error);
    }
  };
  const fetchLatestCourseData = async () => {
    // console.log(
    //   "Fetching  course for class id from server for teacher",
    //   user?.classId
    // );
    const data = {
      id: user?.classId,
    };
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const response = await fetchWithTimeOut({
        url: `${API_URL}/course/fetch`,
        requestOptions,
      });
      if (response) {
        const result = await response.json();
        // console.log("course  class fetched", JSON.stringify(result, null, 4));

        if (result?.status) {
          //  storing fetched time table to local storage
          // await setTimeTable(JSON.stringify(result?.data.time_table));

          setState((prev) => ({
            ...prev,
            course: result.data.course,
          }));
        }
      }
    } catch (error) {
      console.log("Fetch Latest Time Table Error", error);
    }
  };

  const initializeFetchRequestForTeacher = async () => {
    //  course/time_table fetch indication set to true
    setState((prev) => ({ ...prev, isLoading: true }));
    await fetchLatestTimeTable();
    await fetchLatestCourseData();
    //  course/time_table fetch indication set to false
    setState((prev) => ({ ...prev, isLoading: false }));
  };
  useEffect(() => {
    user?.classId &&
      user?.user_type === "teacher" &&
      initializeFetchRequestForTeacher();
  }, [user?.classId]);

  return (
    <TeacherContext.Provider
      value={{
        ...state,
        timeTable,
        workDays,
        ...basicInfo,
        setBasicInfo,
        setWorkDays,
        setTimeTable,
        addPeriodOfDay,
        deletePeriodOfDay,
        swapUpPeriod,
        swapDownPeriod,
        toggleHolidayFlag,
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
};
export const useTeacherContext = () => {
  const context = useContext(TeacherContext);
  if (!context) {
    throw new Error("Error using Context");
  }
  return context;
};
export default TeacherContextProvider;
