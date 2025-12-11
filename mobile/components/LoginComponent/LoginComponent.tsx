import { View } from "react-native";
import { Button, Checkbox, Text, TextInput } from "react-native-paper";
import { LoginStyles } from "./login.styles";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/helpers/schemas/loginSchema";
import ErrorTextComponent from "../ErrorTextMessage/ErrorTextComponent";

export const LoginComponent = () => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({ resolver: zodResolver(loginSchema) });

  const onFormSubmit = (data: any) => {
    setIsSubmitting(true);
    console.log(data);
  };

  useEffect(() => {}, []);

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

      {errors.email && (
        <ErrorTextComponent errorMessage={errors?.email?.message} />
      )}

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

      {errors.password && (
        <ErrorTextComponent errorMessage={errors?.password?.message} />
      )}

      <Button
        mode="outlined"
        onPress={handleSubmit(onFormSubmit)}
        loading={isSubmitting}
        style={LoginStyles.loginButton}
        textColor="white"
        buttonColor="black"
        disabled={!isValid || isSubmitting}
      >
        Acessar
      </Button>
    </View>
  );
};
