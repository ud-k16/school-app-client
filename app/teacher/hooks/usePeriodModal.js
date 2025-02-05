import { useState } from "react";

const usePeriodModal = () => {
  const [state, setState] = useState({
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
export default usePeriodModal;
