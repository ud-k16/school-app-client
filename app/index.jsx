// app/Main.js
import React from "react";

import Login from "../src/common/screens/login";
import TeacherTabNavigation from "../src/teacher/components/TeacherTabNavigation";
import StudentTabNavigation from "../src/student/components/StudentTabNavigation";
import { useAuthContext } from "./common/context/useAuthContext";
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
