import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import AIChat from "../../common/chat";
import EditTimeTable from "@/app/teacher/EditTimeTable";
import TeacherHome from "@/app/teacher/TeacherHome";

const Tab = createBottomTabNavigator();

const TeacherTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="TimeTable"
      screenOptions={{
        headerShown: false, // Hide header for each screen in the tab
        tabBarActiveTintColor: "tomato", // Active tab color
        tabBarInactiveTintColor: "gray", // Inactive tab color
      }}
    >
      <Tab.Screen
        name="TimeTable"
        component={TeacherHome}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="timetable" size={24} color="black" />
          ),
        }}
      />

      <Tab.Screen
        name="Gemini AI"
        component={AIChat}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="chat" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TeacherTabNavigation;
