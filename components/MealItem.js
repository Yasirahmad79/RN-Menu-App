import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetail from "../components/MealDetail";
import { useNavigation } from "@react-navigation/native";

const MealItem = ({id, title, imageUrl, duration, complexity, affordability }) => {
  const navigation = useNavigation()
  const selectedMealpressHandler =()=>{
    navigation.navigate('Meal Detail', {
      mealId: id
    })
  }
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#ccc" }} onPress={selectedMealpressHandler}>
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.mealTitle}>{title}</Text>
        </View>
       <MealDetail duration={duration} complexity={complexity} affordability={affordability}/>
      </Pressable>
    </View>
  );
};
export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    margin: 16,
    borderColor: "#F27900",
    borderWidth: 2,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  mealTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
    textAlign: "center",
    color: 'white'
  },
  image: {
    width: "100%",
    height: 200,
  },
});
