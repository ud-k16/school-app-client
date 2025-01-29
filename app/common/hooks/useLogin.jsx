import { useState } from "react";
import Constants from "expo-constants";

const useAiChat = () => {
  const [state, setState] = useState({
    isLoading: false,
  });
  const { API_URL } = Constants.manifest2.extra;
  const authenticateUser = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    const data = {
      userId,
      password,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(
      `${process.env.BASE_API_URL}/gemini/gemini-request`,
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

  return {
    ...state,

    authenticateUser,
  };
};
export default useAiChat;
