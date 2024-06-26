import { StyleSheet } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import { Ionicons } from "@expo/vector-icons";
// import FavouriteContextProvider from "./store/context/Favorite-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "#0C0D08" },
        headerTitleStyle: { fontWeight: "bold" },
        headerTitleAlign: "center",
      }}
    >
      <Drawer.Screen
        name="All Category"
        component={CategoryScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavouriteContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#0C0D08" },
              headerTitleStyle: { fontWeight: "bold" },
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen
              name="Categories"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Meal OverView" component={MealOverviewScreen} />
            <Stack.Screen name="Meal Detail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      {/* </FavouriteContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
