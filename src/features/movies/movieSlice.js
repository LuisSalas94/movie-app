import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//Movie API
import { APIKEY } from "../../common/apis/movieAPIkey";
import movieAPI from "../../common/apis/movieAPI";

//Movies Thunk Function
export const fetchAsyncMovies = createAsyncThunk(
	"movies/fetchAsyncMovies",
	async () => {
		const term = "Star Wars";
		const response = await movieAPI.get(
			`?apiKey=${APIKEY}&s=${term}&type=movie`
		);
		return response.data;
	}
);

//Initial State
const initialState = {
	movies: {},
};

//Movie Slice
const movieSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchAsyncMovies.fulfilled]: (state, { payload }) => {
			console.log("Successfully fetched movies");
			return { ...state, movies: payload };
		},
	},
});

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
