import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import ExploreScreen from "./screens/ExploreScreen";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import WishlistScreen from "./screens/WishlistScreen";

import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";

const AuthStack = createNativeStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="LoginScreen"
    >
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeScreen"
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="ProductScreen" component={ProductScreen} />
      <HomeStack.Screen name="CartScreen" component={CartScreen} />
      <HomeStack.Screen name="WishlistScreen" component={WishlistScreen} />
    </HomeStack.Navigator>
  );
};

const TabNavigation = createBottomTabNavigator();
const TabNavigationScreen = () => {
  return (
    <TabNavigation.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <TabNavigation.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <TabNavigation.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="shop" size={24} color={color} />
          ),
        }}
      />
      <TabNavigation.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="filetext1" size={24} color={color} />
          ),
        }}
      />
      <TabNavigation.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </TabNavigation.Navigator>
  );
};

const AuthCheck = () => {
  return (
    <NavigationContainer>
      {true ? <TabNavigationScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

function Navigation() {
  return <AuthCheck />;
}

export default Navigation;
