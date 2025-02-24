import { createContext, useContext, useState } from "react";

const TeacherContext = createContext();

const TeacherContextProvider = ({ children }) => {
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

  return (
    <TeacherContext.Provider
      value={{
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
