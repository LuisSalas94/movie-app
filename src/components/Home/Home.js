import React, { useEffect } from "react";
import "./Home.scss";
//components
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
import Hero from "../Hero/Hero";
import MovieListing from "../MovieListing/MovieListing";
//redux
import { useDispatch } from "react-redux";

const Home = () => {
	const dispatch = useDispatch();
	const movies = [
		"Star Wars",
		"Batman",
		"Avengers",
		"Lord of the rings",
		"The hobbit",
	];
	const randomMovie = Math.floor(Math.random() * movies.length);
	console.log(randomMovie);

	useEffect(() => {
		dispatch(fetchAsyncMovies(movies[randomMovie]));
	}, [dispatch, randomMovie]);

	return (
		<div>
			<Hero />
			<MovieListing />
		</div>
	);
};

export default Home;
