import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./Favorite";

export const store = configureStore({
    reducer: {
        favoriteMeals: favoriteReducer
    }
})

