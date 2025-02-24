// app/Main.js
import React from "react";

import Login from "./common/login";
import TeacherTabNavigation from "./teacher/TeacherTabNavigation";
import StudentTabNavigation from "./student/StudentTabNavigation";
import { useAuthContext } from "../src/common/context/useAuthContext";
import { Text } from "react-native";

const Main = () => {
  const { isLoading, authenticated, user } = useAuthContext();
  if (isLoading) return <Text>Wait</Text>;
  else if (!authenticated) return <Login />;
  return user?.user_type === "student" ? (
    <StudentTabNavigation />
  ) : (
    <TeacherTabNavigation />
  );
};

export default Main;
