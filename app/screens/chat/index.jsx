import { TextInput, View } from "react-native";
import { styles } from "./styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const AIChat = () => {
  return (
    <View style={styles.container}>
      <View style={styles.questionInputSectionContainer}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Ask Gemini"
          multiline
          autoFocus
        />
        <MaterialIcons name="send" size={24} color="black" />
      </View>
    </View>
  );
};
export default AIChat;
