import { Stack } from "expo-router";
import TeacherContextProvider from "../app/teacher/context/useTeacherContext";
import AuthContextProvider from "../app/common/context/useAuthContext";
import StudentContextProvider from "./student/context/useStudentContext";

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <StudentContextProvider>
        <TeacherContextProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </TeacherContextProvider>
      </StudentContextProvider>
    </AuthContextProvider>
  );
}
