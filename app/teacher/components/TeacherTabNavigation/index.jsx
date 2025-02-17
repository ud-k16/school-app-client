import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import AIChat from "../../../common/screens/chat";
import ManageTimeTable from "../../../teacher/screens/manageTimeTable";

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
        component={ManageTimeTable}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="timetable" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Course"
        component={ManageTimeTable}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="book" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
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
