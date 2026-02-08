import { LoginComponent } from "@/components/LoginComponent/LoginComponent";
import { login } from "@/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleLogin = (email: string, password: string) => {
    dispatch(login({ login: email, password }));
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to Zini Finances</Text>
      <LoginComponent />
    </View>
  );
}
