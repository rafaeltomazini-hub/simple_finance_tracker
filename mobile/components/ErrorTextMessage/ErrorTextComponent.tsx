import { Text } from "react-native";

const ErrorTextComponent = ({
  errorMessage,
}: {
  errorMessage: string | undefined;
}) => {
  if (!errorMessage) {
    return null;
  }

  return <Text style={{ color: "red" }}>{errorMessage}</Text>;
};

export default ErrorTextComponent;
