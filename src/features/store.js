import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movies/movieSlice";
import favoritesSlice from "./favorites/favoritesSlice";

const store = configureStore({
	reducer: {
		movies: movieSlice,
		favorites: favoritesSlice,
	},
});

export default store;
