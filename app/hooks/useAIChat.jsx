import { useEffect, useRef, useState } from "react";

const useAiChat = () => {
  const [state, setState] = useState({
    messages: [],
  });
  const [userInput, setUserInput] = useState("");
  const messageRef = useRef();

  const getAnswer = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: userInput,
      }),
    };
    const response = await fetch(
      "http://192.168.188.73:5000/api/gemini/gemini-request",
      requestOptions
    );

    const result = await response.json();

    if (result.status) {
      setState((prev) => {
        prev.messages.push({
          data: result.data,
          sender: "gemini",
        });
        return { ...prev };
      });
    }
  };
  useEffect(() => {
    messageRef.current.scrollToEnd();
  }, [state.messages.length]);

  return {
    ...state,
    messageRef,
    userInput,
    setUserInput,
    setState,
    getAnswer,
  };
};
export default useAiChat;
