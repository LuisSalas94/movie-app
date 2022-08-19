import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movies/movieSlice";
import favoritesSlice from "./favorites/favoritesSlice";
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "persist-movie-app",
	version: 1,
	storage,
};

const persistedReducer = persistReducer(persistConfig, favoritesSlice);

const store = configureStore({
	reducer: {
		movies: movieSlice,
		favorites: persistedReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export default store;
