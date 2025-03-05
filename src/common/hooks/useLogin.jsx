import { useState } from "react";
import Constants from "expo-constants";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useAuthContext } from "../context/useAuthContext";
import { fetchWithTimeOut } from "@/src/utils/helperFunctions";

const useLogin = () => {
  const [state, setState] = useState({
    isLoading: false,
    userId: "uma k",
    password: "12345678",
  });
  const { API_URL } = Constants.expoConfig.extra;
  const { setItem: setUser } = useAsyncStorage("user");
  const { setState: setAuthState } = useAuthContext();

  const authenticateUser = async ({}) => {
    try {
      setState((prev) => ({
        ...prev,
        isLoading: true,
      }));
      const data = {
        userId: state.userId,
        password: state.password,
      };
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const response = await fetchWithTimeOut({
        url: `${API_URL}/auth/login`,
        requestOptions,
      });

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
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
      alert("Something went wrong, Try after Sometime");
    }
  };

  return {
    ...state,
    setState,
    authenticateUser,
  };
};
export default useLogin;
