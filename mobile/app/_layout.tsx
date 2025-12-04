import { AuthProvider } from "@/utils/authContext";
import { app } from "@/utils/firebaseConfig";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    getAuth(app);
  }, []);

  const theme = {};

  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="login/index" options={{ headerShown: false }} />
        </Stack>
      </AuthProvider>
    </PaperProvider>
  );
}
