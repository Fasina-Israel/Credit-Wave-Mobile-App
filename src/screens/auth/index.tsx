
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./SignInScreen";
import SignUp from "./SignUpScreen";

const Stack = createNativeStackNavigator();


const Index = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Sign In", headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "Sign Up", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Index;
