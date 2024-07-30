import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./Favorite";
import cartReducer from "./Cart";

export const store = configureStore({
    reducer: {
        favoriteMeals: favoriteReducer,
        cart: cartReducer
    }
})

