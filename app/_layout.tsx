import { Stack } from "expo-router";
import TeacherContextProvider from "../app/teacher/context/useTeacherContext";

export default function RootLayout() {
  return (
    <TeacherContextProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </TeacherContextProvider>
  );
}
