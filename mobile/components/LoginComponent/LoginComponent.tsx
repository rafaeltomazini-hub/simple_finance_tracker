import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { LoginStyles } from "./login.styles";

export const LoginComponent = () => {
  return (
    <View style={LoginStyles.componentContainer}>
      <TextInput label={"E-mail"} mode="outlined" />
      <TextInput label={"Password"} mode="outlined" />
    </View>
  );
};
