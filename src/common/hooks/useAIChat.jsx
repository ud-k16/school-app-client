import { isLoading } from "expo-font";
import { useEffect, useRef, useState } from "react";
import Constants from "expo-constants";

const useAiChat = () => {
  const [state, setState] = useState({
    messages: [],
    isLoading: false,
  });
  const [userInput, setUserInput] = useState("");
  const messageRef = useRef();
  const { API_URL } = Constants.expoConfig.extra;

  const getAnswer = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: userInput,
      }),
    };
    console.log(`${API_URL}/gemini/gemini-request`);
    const response = await fetch(
      `${API_URL}/gemini/gemini-request`,
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
    setState((prev) => ({
      ...prev,
      isLoading: false,
    }));
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
