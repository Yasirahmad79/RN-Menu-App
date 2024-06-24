import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoryScreen = ({navigation}) => {
  function renderCategoryItems(itemData) {
    function pressHandler() {
      navigation.navigate("Meal OverView", {
        categoryId: itemData.item.id
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={renderCategoryItems}
    />
  );
};
export default CategoryScreen;
