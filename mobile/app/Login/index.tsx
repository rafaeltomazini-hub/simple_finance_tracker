import { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";

const LoginScreen = () => {
  const [userInput, setUserInput] = useState("");
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default LoginScreen;
