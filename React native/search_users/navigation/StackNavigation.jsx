import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "../utils/routes";
import Home from "../screens/Home";
import UserDetails from "../screens/UserDetails";

const StackNavigation = () => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator>
      <stack.Screen
        name={routes.home}
        component={Home}
        options={{ headerTitle: "Home Screen" }}
      ></stack.Screen>
      <stack.Screen
        name={routes.userDetails}
        options={{ headerTitle: "User Details" }}
        component={UserDetails}
      ></stack.Screen>
    </stack.Navigator>
  );
};

export default StackNavigation;
