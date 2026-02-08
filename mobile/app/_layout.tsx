import { AuthProvider } from "@/utils/authContext";
import { app } from "@/utils/firebaseConfig";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function RootLayout() {
  useEffect(() => {
    getAuth(app);
  }, []);

  const theme = {};

  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <AuthProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="login/index" options={{ headerShown: false }} />
          </Stack>
        </AuthProvider>
      </Provider>
    </PaperProvider>
  );
}
