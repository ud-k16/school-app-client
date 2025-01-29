import { useState } from "react";

const useTimeTable = () => {
  const [state, setState] = useState({
    class: null,
    numberOfPeriods: null,
    periodDuration: null,
  });
  return {
    ...state,
    setState,
  };
};
export default useTimeTable;
