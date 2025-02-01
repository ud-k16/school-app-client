import { useState } from "react";

const useTimeTable = () => {
  const [state, setState] = useState({
    class: null,
    workDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "saturday",
      "sunday",
    ],
    addPeriodModalVisibility: false,
    timetable: {
      monday: {
        assembly: "9:00 am  - 10:00 am",
        maths: "10:00 am - 10:30 am",
      },
      tuesday: {
        assembly: "9:00 am  - 10:00 am",
      },
    },
  });
  const hideModal = () =>
    setState((prev) => ({ ...prev, addPeriodModalVisibility: false }));
  const showModal = () =>
    setState((prev) => ({ ...prev, addPeriodModalVisibility: true }));

  return {
    ...state,
    setState,
    hideModal,
    showModal,
  };
};
export default useTimeTable;
