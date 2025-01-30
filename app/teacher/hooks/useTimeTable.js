import { useState } from "react";

const useTimeTable = () => {
  const [state, setState] = useState({
    class: null,
    workDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  });
  return {
    ...state,
    setState,
  };
};
export default useTimeTable;
