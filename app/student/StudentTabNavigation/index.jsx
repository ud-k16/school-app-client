import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import StudentHome from "@/app/student/Home";
import ViewCourse from "@/app/student/ViewCourse";
import AIChat from "@/app/common/chat";

const Tab = createBottomTabNavigator();

const StudentTabNavigation = () => {
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
        component={StudentHome}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="timetable" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Course"
        component={ViewCourse}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="book" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="AI chat"
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
export default StudentTabNavigation;
