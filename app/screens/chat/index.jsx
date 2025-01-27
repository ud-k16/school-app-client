import { FlatList, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import useAIChat from "../../hooks/useAIChat";

const AIChat = () => {
  const { messages, inputQuestion, getAnswer } = useAIChat();
  const QandACard = ({ item }) => {
    console.log(item);

    return (
      <View>
        <Text>{item.question}</Text>
        <Text>{item.answer}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={messages} renderItem={QandACard} />
      <View style={styles.questionInputSectionContainer}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={inputQuestion}
          placeholder="Ask Gemini"
          multiline
          autoFocus
        />
        <MaterialIcons
          name="send"
          size={24}
          color="black"
          onPress={getAnswer}
        />
      </View>
    </View>
  );
};
export default AIChat;
