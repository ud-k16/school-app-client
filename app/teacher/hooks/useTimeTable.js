import { useState } from "react";

const useTimeTable = () => {
  const [state, setState] = useState({
    class: null,
    workDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    addPeriodModalVisibility: false,
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
