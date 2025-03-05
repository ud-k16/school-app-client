import {
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import useAIChat from "@/src/common/hooks/useAIChat";
import Header from "@/src/common/components/Header";

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
      <Header title="AI Chat" />
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
          suppressHighlighting={false}
          name="send"
          size={24}
          color={isLoading ? "gray" : "black"}
          onPress={
            isLoading
              ? null
              : () => {
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
                }
          }
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  questionInputSectionContainer: {
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: 60,
    borderStyle: "solid",
    borderWidth: 1,
  },
  textInputStyle: {
    width: "80%",
    height: "100%",
  },
  chatCardContainer: {
    rowGap: 10,
    width: "100%",
    paddingHorizontal: 5,
    marginVertical: 10,
  },
  questionContainer: {
    padding: 5,
    color: "white",
    borderRadius: 5,
    backgroundColor: "green",
    alignSelf: "flex-end",
    width: "50%",
  },
  answerContainer: {
    padding: 5,
    color: "white",
    borderRadius: 5,
    backgroundColor: "green",
    left: 0,
    width: "50%",
  },
});
export default AIChat;
