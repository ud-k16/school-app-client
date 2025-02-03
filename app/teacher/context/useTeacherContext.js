import { createContext, useContext, useState } from "react";

const TeacherContext = createContext();
const TeacherContextProvider = ({ children }) => {
  const [timeTable, setTimeTable] = useState(new Map());

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

  return (
    <TeacherContext.Provider
      value={{ timeTable, setTimeTable, addPeriodOfDay, updatePeriodOfDay }}
    >
      {children}
    </TeacherContext.Provider>
  );
};
export const useCartContext = () => {
  const context = useContext(TeacherContext);
  if (!context) {
    throw new Error("Error using Context");
  }
  return context;
};
export default TeacherContextProvider;
