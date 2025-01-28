import { useState } from "react";

const useAiChat = () => {
  const [state, setState] = useState({
    messages: [],
  });
  const [userInput, setUserInput] = useState("");
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
      setState((prev) => {
        const lengthOfArray = prev.messages.length - 1;
        prev.messages[lengthOfArray] = {
          question: prev.messages[lengthOfArray].question,
          answer: result.data,
        };
        return { ...prev };
      });
    }
  };

  return {
    ...state,
    userInput,
    setUserInput,
    setState,
    getAnswer,
  };
};
export default useAiChat;
