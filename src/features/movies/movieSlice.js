import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//Movie API
import { APIKEY } from "../../common/apis/movieAPIkey";
import movieAPI from "../../common/apis/movieAPI";

//Movies Thunk Function
export const fetchAsyncMovies = createAsyncThunk(
	"movies/fetchAsyncMovies",
	async (term) => {
		//const term = "Star Wars";
		const response = await movieAPI.get(
			`?apiKey=${APIKEY}&s=${term}&type=movie`
		);
		return response.data;
	}
);

//Shows Thunk function
export const fetchAsyncShows = createAsyncThunk(
	"movies/fetchAsyncShows",
	async (term) => {
		//const movieText = "Stranger Things";
		const response = await movieAPI.get(
			`?apiKey=${APIKEY}&s=${term}&type=series`
		);
		return response.data;
	}
);

//MovieOrShow Thunk function
export const fetchAsyncmovieOrShow = createAsyncThunk(
	"movies/fetchAsyncmovieOrShow",
	async (id) => {
		const response = await movieAPI.get(`?apiKey=${APIKEY}&i=${id}&plot=full`);
		return response.data;
	}
);

//Initial State
const initialState = {
	movies: {},
	shows: {},
	movieOrShow: {},
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
		[fetchAsyncShows.fulfilled]: (state, { payload }) => {
			return { ...state, shows: payload };
		},
		[fetchAsyncmovieOrShow.fulfilled]: (state, { payload }) => {
			return { ...state, movieOrShow: payload };
		},
	},
});

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
