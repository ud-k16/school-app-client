import { useState } from "react";

const useAiChat = () => {
  const [state, setState] = useState({
    messages: [],
    userInput: "",
  });
  const getAnswer = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: state.userInput,
      }),
    };
    const response = await fetch(
      "http://192.168.188.73:5000/api/gemini/gemini-request",
      requestOptions
    );

    const result = await response.json();

    if (result.status) {
      setState((prev) => ({
        ...prev,
      }));
    }
  };

  return {
    ...state,
    setState,
    getAnswer,
  };
};
export default useAiChat;
