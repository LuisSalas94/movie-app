import React, { useEffect } from "react";
import "./Home.scss";
//components
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
import { fetchAsyncShows } from "../../features/movies/movieSlice";
import Hero from "../Hero/Hero";
import MovieListing from "../MovieListing/MovieListing";
import Pricing from "../Pricing/Pricing";
import Footer from "../Footer/Footer";
//redux
import { useDispatch } from "react-redux";

const Home = () => {
	const dispatch = useDispatch();
	const movies = ["star Wars", "batman", "avengers", "lord of the rings"];
	const shows = ["Stranger Things", "friends", "the walking dead"];
	const randomMovie = Math.floor(Math.random() * movies.length);
	const randomShow = Math.floor(Math.random() * shows.length);

	useEffect(() => {
		dispatch(fetchAsyncMovies(movies[randomMovie]));
		dispatch(fetchAsyncShows(shows[randomShow]));
	}, [dispatch, movies, shows]);

	return (
		<div id="home">
			<Hero />
			<MovieListing />
			<Pricing id="pricing" />
			<Footer id="footer" />
		</div>
	);
};

export default Home;
