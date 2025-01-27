import { FlatList, Keyboard, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import useAIChat from "../../hooks/useAIChat";

const AIChat = () => {
  const { messages, userInput, setState, getAnswer } = useAIChat();
  const QandACard = ({ item }) => {
    return (
      <View style={styles.chatCardContainer}>
        <Text style={styles.questionContainer}>{item.question}</Text>
        {item.answer && (
          <Text style={styles.answerContainer}>{item.answer}</Text>
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={messages} renderItem={QandACard} />
      <View style={styles.questionInputSectionContainer}>
        <TextInput
          defaultValue={userInput}
          style={styles.textInputStyle}
          onChangeText={(text) =>
            setState((prev) => ({
              ...prev,
              userInput: text,
            }))
          }
          placeholder="Ask Gemini"
          multiline
          autoFocus
        />
        <MaterialIcons
          name="send"
          size={24}
          color="black"
          onPress={() => {
            setState((prev) => ({
              ...prev,
              messages: [
                ...prev.messages,
                {
                  question: userInput,
                  answer: "",
                },
              ],
              userInput: "", //clearing textfield
            }));
            Keyboard.dismiss();
            getAnswer();
          }}
        />
      </View>
    </View>
  );
};
export default AIChat;
