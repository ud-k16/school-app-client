import { useState } from "react";
import Constants from "expo-constants";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useAuthContext } from "../context/useAuthContext";

const useLogout = () => {
  const [state, setState] = useState({
    isLoading: false,
  });

  const { removeItem: removeUser } = useAsyncStorage("user");
  const { removeItem: removeTimeTable } = useAsyncStorage("timeTable");
  const { setState: setAuthState } = useAuthContext();

  const logoutUser = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    // clearing local storage of user
    await removeUser();
    // clearing local storage of timetable
    await removeTimeTable();
    setAuthState((prev) => {
      return {
        ...prev,
        authenticated: false,
        user: null,
      };
    });

    setState((prev) => ({
      ...prev,
      isLoading: false,
    }));
  };

  return {
    ...state,
    logoutUser,
  };
};
export default useLogout;
