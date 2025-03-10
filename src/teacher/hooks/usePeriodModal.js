import { useState } from "react";

const usePeriodModal = () => {
  const [state, setState] = useState({
    isSaving: false,
    addPeriodModalVisibility: false,
    subject: "",
    startTime: { hr: "", min: "", meridiam: "" },
    endTime: { hr: "", min: "", meridiam: "" },
    subjectError: "",
    startTimeError: "",
    endTimeError: "",
  });

  const hoursOptions = [
    {
      label: "01",
      value: "01",
    },
    {
      label: "02",
      value: "02",
    },
    {
      label: "03",
      value: "03",
    },
    {
      label: "04",
      value: "04",
    },
    {
      label: "05",
      value: "05",
    },
    {
      label: "06",
      value: "06",
    },
    {
      label: "07",
      value: "07",
    },
    {
      label: "08",
      value: "08",
    },
    {
      label: "09",
      value: "09",
    },
    {
      label: "10",
      value: "10",
    },
    {
      label: "11",
      value: "11",
    },
    {
      label: "12",
      value: "12",
    },
  ];
  const timemeridiam = [
    {
      label: "am",
      value: "am",
    },
    {
      label: "pm",
      value: "pm",
    },
  ];

  const hideModal = () =>
    setState((prev) => ({ ...prev, addPeriodModalVisibility: false }));
  const showModal = () =>
    setState((prev) => ({ ...prev, addPeriodModalVisibility: true }));

  // function creates option for dropdown for minutes
  const minuteCreationFunction = () => {
    const minutesArray = [];
    for (let i = 0; i < 60; i++) {
      minutesArray.push({
        value: i < 10 ? `0${i}` : `${i}`,
        label: i < 10 ? `0${i}` : `${i}`, // Formatting minutes as "01", "02", ..., "59"
      });
    }
    return minutesArray;
  };
  const validationErrorMessage = () => {
    setState((prev) => {
      return {
        ...prev,
        subjectError: prev.subject ? "" : "Enter subject",
        startTimeError:
          prev.startTime.hr && prev.startTime.meridiam && prev.startTime.min
            ? ""
            : "Enter start Time",
        endTimeError:
          prev.endTime.hr && prev.endTime.meridiam && prev.endTime.min
            ? ""
            : "Enter End Time",
      };
    });
  };
  const addValidPeriodDataToRespectiveDay = ({ day, callback }) => {
    if (
      state.subject &&
      state.startTime.hr &&
      state.startTime.meridiam &&
      state.startTime.min &&
      state.endTime.hr &&
      state.endTime.meridiam &&
      state.endTime.min
    ) {
      callback({
        day,
        payload: {
          time: `${state.startTime.hr}:${state.startTime.min} ${state.startTime.meridiam} - ${state.endTime.hr}:${state.endTime.min} ${state.endTime.meridiam}`,
          subject: state.subject,
        },
      });
    } else validationErrorMessage();
  };
  return {
    ...state,
    hoursOptions,
    timemeridiam,
    setState,

    addValidPeriodDataToRespectiveDay,
    minuteCreationFunction,
    hideModal,
    showModal,
  };
};
export default usePeriodModal;
