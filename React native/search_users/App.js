import StackNavigation from "./navigation/StackNavigation";
import styles from "./styles";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StackNavigation></StackNavigation>
      </NavigationContainer>
    </>
  );
}
