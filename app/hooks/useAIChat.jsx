import { useState } from "react";

const useAiChat = () => {
  const [state, setState] = useState({
    messages: [],
    currentQuestion: "",
  });
  const getAnswer = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: state.currentQuestion,
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
        messages: [
          ...prev.messages,
          {
            question: state.currentQuestion,
            answer: result.data,
          },
        ],
        currentQuestion: "",
      }));
    }
  };
  const inputQuestion = (text = "") => {
    setState((prev) => ({
      ...prev,
      currentQuestion: text,
    }));
  };
  return {
    ...state,
    inputQuestion,
    getAnswer,
  };
};
export default useAiChat;
