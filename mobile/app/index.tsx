import { LoginComponent } from "@/components/LoginComponent/LoginComponent";
import { useRouter } from "expo-router";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

export default function Index() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to Zini Finances</Text>
      <LoginComponent />
    </View>
  );
}
