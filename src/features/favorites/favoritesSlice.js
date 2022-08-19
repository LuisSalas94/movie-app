import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	favorites: [],
};

const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		addToFavorites: (state, { payload }) => {
			state.favorites.push(payload);
		},
		removeFromFavorites: (state, { payload }) => {
			state.favorites = state.favorites.filter(
				(favorite) => favorite.imdbID !== payload
			);
		},
	},
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
