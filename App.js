import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import IconButton from "./components/ui/IconButton";
import ProfileScreen from "./screens/ProfileScreen";
import { Colors } from "./constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
import WelcomeScreen from "./screens/WellcomeScreen";
import CartItemScreen from "./screens/CartItemsScreen";
import { Image, Pressable } from "react-native";
import CheckoutScreen from "./screens/CheckoutScreen";
import PaymentScreen from "./screens/PaymentScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#351401" },
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
        headerTitleAlign: "center",
        tabBarLabelStyle: { color: "white", fontWeight: "bold" },
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarActiveTintColor: "#F5C201",
      }}
    >
      <Tab.Screen
        name="Home"
        component={WelcomeScreen}
        options= {({navigation}) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerRight: () => (
            <Pressable onPress={() =>{
              navigation.navigate("Profile");
            }}>
            <Image
              style={{
                width: 45,
                height: 45,
                borderRadius: 20,
                marginHorizontal: 10,
                resizeMode: "cover",
              }}
              source={require("./assets/Yasir ahmad.png")}
            />
            </Pressable>
          ),
        })}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CartItems"
        component={CartItemScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
          headerRight: () => (
            <IconButton
              icon="exit"
              color="white"
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary800, fontWeight: "bold" },
        headerTitleAlign: "center",
        headerTintColor: "white",
        contentStyle: { backgroundColor: "#351401" },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.greenish },
      }}
    >
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Meal OverView" component={MealOverviewScreen} />
      <Stack.Screen name="Meal Detail" component={MealDetailScreen} />
      <Stack.Screen name="checkout" component={CheckoutScreen} />
      <Stack.Screen name="payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated ? <AuthStack /> : <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const fetchStoredToken = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
    };
    fetchStoredToken();
  }, []);

  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <AuthContextProvider>
          <Root />
        </AuthContextProvider>
      </Provider>
    </>
  );
}
