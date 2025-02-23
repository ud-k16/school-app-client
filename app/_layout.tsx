import { Stack } from "expo-router";
import TeacherContextProvider from "../src/teacher/context/useTeacherContext";
import AuthContextProvider from "../src/common/context/useAuthContext";
import StudentContextProvider from "../src/student/context/useStudentContext";

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
