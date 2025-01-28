import {
  Dimensions,
  FlatList,
  Keyboard,
  Text,
  TextInput,
  View,
} from "react-native";
import { styles } from "./styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import useAIChat from "../../hooks/useAIChat";

const AIChat = () => {
  const {
    messages,
    userInput,
    messageRef,
    isLoading,
    setState,
    getAnswer,
    setUserInput,
  } = useAIChat();
  const QandACard = ({ item }) => {
    return (
      <View style={styles.chatCardContainer}>
        {item.sender === "gemini" ? (
          <Text style={styles.answerContainer}>{item.data}</Text>
        ) : (
          <Text style={styles.questionContainer}>{item.data}</Text>
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={messages} renderItem={QandACard} ref={messageRef} />
      <View style={styles.questionInputSectionContainer}>
        <TextInput
          defaultValue={userInput}
          style={styles.textInputStyle}
          onChangeText={(text) => setUserInput(text)}
          placeholder="Ask Gemini"
          multiline
          autoFocus
        />
        <MaterialIcons
          name="send"
          size={24}
          color="black"
          onPress={() => {
            setUserInput(""); //clearing input field
            setState((prev) => {
              prev.messages.push({
                data: userInput,
                sender: "me",
              });
              return { ...prev };
            });
            Keyboard.dismiss();
            getAnswer();
          }}
        />
      </View>
    </View>
  );
};
export default AIChat;
