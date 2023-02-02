import { Button } from "react-native";
import { useNavigation, useSearchParams, usePathname } from "expo-router";

export default function Layout() {
  const navigation = useNavigation();
  const params = useSearchParams();

  return (
    <Button
      title="Unlock"
      onPress={() => {
        navigation.reset(JSON.parse(params.prevNavState));
      }}
    />
  );
}
