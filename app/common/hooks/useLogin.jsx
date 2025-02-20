import { useState } from "react";
import Constants from "expo-constants";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useAuthContext } from "../context/useAuthContext";

const useLogin = () => {
  const [state, setState] = useState({
    isLoading: false,
  });
  const { API_URL } = Constants.expoConfig.extra;
  const { setItem: setUser } = useAsyncStorage("user");
  const { setState: setAuthState } = useAuthContext();

  const authenticateUser = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    const data = {
      userId: "umak",
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
      await setUser(JSON.stringify(result?.data));
      // updating auth context values
      setAuthState((prev) => {
        return {
          ...prev,
          authenticated: true,
          user: result.data,
        };
      });
    }
    // toggle loading indicator
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
