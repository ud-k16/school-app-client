import { Stack } from "expo-router";
import TeacherContextProvider from "../app/teacher/context/useTeacherContext";
import AuthContextProvider from "../app/common/context/useAuthContext";
import DataContextProvider from "../app/common/context/useDataContext";

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <DataContextProvider>
        <TeacherContextProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </TeacherContextProvider>
      </DataContextProvider>
    </AuthContextProvider>
  );
}
