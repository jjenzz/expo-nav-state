import { Button } from "react-native";
import { useNavigation, useRouter } from "expo-router";

export default function Layout() {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <Button
      title="Logout"
      onPress={() => {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: "unlock",
              params: { prevNavState: JSON.stringify(navigation.getState()) },
            },
          ],
        });
      }}
    />
  );
}
