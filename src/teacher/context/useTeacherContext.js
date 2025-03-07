import { useAuthContext } from "@/src/common/context/useAuthContext";
import { fetchWithTimeOut } from "@/src/utils/helperFunctions";
import { createContext, useContext, useEffect, useState } from "react";
import Constants from "expo-constants";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const TeacherContext = createContext();

const TeacherContextProvider = ({ children }) => {
  // get api url from extra field of expo
  const { API_URL } = Constants.expoConfig.extra;
  const [state, setState] = useState({
    isLoading: true,
    // stores course data for edit
    course: null,
    // stores course fetched from server [latest published course available]
    coursePosted: null,
    // stores published time table[latest one]
    timeTablePosted: new Map(),
    // socket instance
    ws: new WebSocket(`ws://192.168.1.7:5004`),
  });
  const { user } = useAuthContext();
  const { setItem: setCourse, getItem: getCourse } = useAsyncStorage("course");
  const { setItem: setTimetable, getItem: getTimeTable } =
    useAsyncStorage("timeTable");
  // variable to hold info about working weekdays in the timetable
  const [workDays, setWorkDays] = useState([
    { day: "monday", holiday: false },
    { day: "tuesday", holiday: false },
    { day: "wednesday", holiday: false },
    { day: "thursday", holiday: false },
    { day: "friday", holiday: false },
    { day: "saturday", holiday: false },
    { day: "sunday", holiday: false },
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

          setState((prev) => ({
            ...prev,
            timeTablePosted: new Map(result.data.time_table),
          }));
        }
      }
    } catch (error) {
      console.log("Fetch Latest Time Table Error", error);
      throw error;
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
        console.log(
          "course  class fetched for teacher",
          JSON.stringify(result?.data.course, null, 4)
        );

        if (result?.status) {
          //  storing fetched time table to local storage
          // await setTimeTable(JSON.stringify(result?.data.time_table));

          setState((prev) => ({
            ...prev,
            coursePosted: result.data.course,
          }));
        }
      }
    } catch (error) {
      console.log("Fetch Latest Time Table Error", error);
      throw error;
    }
  };

  const initializeFetchRequestForTeacher = async () => {
    try {
      //  course/time_table fetch indication set to true
      setState((prev) => ({ ...prev, isLoading: true }));
      await fetchLatestTimeTable();
      await fetchLatestCourseData();
      //  course/time_table fetch indication set to false
      setState((prev) => ({ ...prev, isLoading: false }));
    } catch (error) {
      //  course/time_table fetch indication set to false
      setState((prev) => ({ ...prev, isLoading: false }));
      alert("something went wrong!");
    }
  };
  const locallyStoredEditedData = async () => {
    const courseInLocalStorage = await getCourse();
    const timeTableInLocalStorage = await getTimeTable();
    // console.log("course in local for initial fetch",courseInLocalStorage);
    // console.log(
    //   "time table in local for initial fetch",
    //   timeTableInLocalStorage
    // );
    setState((prev) => ({
      ...prev,
      course: JSON.parse(courseInLocalStorage),
    }));
    setTimeTable(new Map(JSON.parse(timeTableInLocalStorage)));
  };

  useEffect(() => {
    // socket connection
    // state.ws.onopen = () => {
    //   console.log("connected to socket");
    // };

    user?.classId &&
      user?.user_type === "teacher" &&
      initializeFetchRequestForTeacher() &&
      locallyStoredEditedData();

    return () => {
      // closing websocket on unmount
      state.ws.close();
    };
  }, [user?.classId]);

  return (
    <TeacherContext.Provider
      value={{
        ...state,
        setState,
        timeTable,
        workDays,
        ...basicInfo,
        setBasicInfo,
        setWorkDays,
        setTimeTable,
        fetchLatestCourseData,
        fetchLatestTimeTable,
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
