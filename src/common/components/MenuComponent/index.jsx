import useLogout from "@/src/common/hooks/useLogout";
import { styles } from "./styles";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";
import { useAuthContext } from "../../context/useAuthContext";
const MenuComponent = () => {
  const { user } = useAuthContext();
  const { logoutUser } = useLogout();
  return (
    <View style={styles.container}>
      {user?.user_type === "student" && (
        <Pressable
          style={styles.displayStack1}
          onPress={() => {
            router.navigate({
              pathname: "/student/EntireTimeTable",
            });
          }}
        >
          <AntDesign
            name="calendar"
            size={24}
            color="black"
            style={styles.iconStyle}
          />
          <Text style={styles.itemTextStyle}>Schedule</Text>
        </Pressable>
      )}
      {user?.user_type === "student" && (
        <Pressable
          style={styles.displayStack1}
          onPress={() => {
            router.navigate({
              pathname: "/student/ViewCourse",
            });
          }}
        >
          <MaterialIcons
            name="subject"
            size={24}
            color="black"
            style={styles.iconStyle}
          />
          <Text style={styles.itemTextStyle}>Course</Text>
        </Pressable>
      )}
      <Pressable
        style={styles.displayStack1}
        onPress={() => {
          router.navigate({
            pathname: "/common/chat",
          });
        }}
      >
        <Ionicons
          name="chatbox-outline"
          size={24}
          color="black"
          style={styles.iconStyle}
        />
        <Text style={styles.itemTextStyle}>Gemini AI </Text>
      </Pressable>
      <Pressable style={styles.displayStack1} onPress={logoutUser}>
        <MaterialIcons
          name="account-circle"
          size={24}
          color="black"
          style={styles.iconStyle}
        />
        <Text style={styles.itemTextStyle}>Logout </Text>
      </Pressable>
    </View>
  );
};
export default MenuComponent;
