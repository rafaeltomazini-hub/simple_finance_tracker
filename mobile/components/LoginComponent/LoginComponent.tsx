import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { LoginStyles } from "./login.styles";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

export const LoginComponent = () => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onFormSubmit = (data: any) => {
    setIsSubmitting(true);
    console.log(data);
  };

  return (
    <View style={LoginStyles.componentContainer}>
      <Controller
        control={control}
        name="email"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="E-mail"
            mode="outlined"
            outlineColor="black"
            activeOutlineColor="black"
            right={<TextInput.Icon icon="email" />}
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry={isSecureTextEntry}
            outlineColor="black"
            activeOutlineColor="black"
            right={
              <TextInput.Icon
                icon="lock"
                onPress={() => setIsSecureTextEntry((prev) => !prev)}
              />
            }
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Button
        mode="outlined"
        onPress={handleSubmit(onFormSubmit)}
        loading={isSubmitting}
        style={LoginStyles.loginButton}
        textColor="white"
        buttonColor="black"
      >
        Acessar
      </Button>
    </View>
  );
};
