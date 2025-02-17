import { useState } from "react";
import Constants from "expo-constants";

const useLogin = () => {
  const [state, setState] = useState({
    isLoading: false,
  });
  const { API_URL } = Constants.expoConfig.extra;
  const authenticateUser = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    const data = {
      userId: "uma",
      password: "12345678",
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(`${API_URL}/auth/login`, requestOptions);

    const result = await response.json();

    if (result.status) {
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
export default useLogin;
