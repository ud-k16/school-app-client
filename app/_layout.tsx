import { Stack } from "expo-router";
import TeacherContextProvider from "../app/teacher/context/useTeacherContext";
import AuthContextProvider from "../app/common/context/useAuthContext";

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <TeacherContextProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </TeacherContextProvider>
    </AuthContextProvider>
  );
}
