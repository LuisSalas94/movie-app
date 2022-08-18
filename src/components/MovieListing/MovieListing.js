import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./MovieListing.scss";
import MovieCard from "../MovieCard/MovieCard";
import Aos from "aos";
import "aos/dist/aos.css";

const MovieListing = () => {
	const movies = useSelector((state) => state.movies.movies);
	const shows = useSelector((state) => state.movies.shows);
	useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []);

	let renderMovies = "";
	let renderShows = "";

	renderMovies =
		movies.Response === "True" ? (
			movies.Search.map((movie, index) => (
				<MovieCard key={index} data={movie} />
			))
		) : (
			<div className="movies-error">
				<h3>{movies.Error}</h3>
			</div>
		);

	renderShows =
		shows.Response === "True" ? (
			shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
		) : (
			<div className="movies-error">
				<h3>{shows.Error}</h3>
			</div>
		);

	return (
		<div className="movie-wrapper">
			<div className="movie-list">
				<div className="movie-list-header">
					<div className="movie-list-line"></div>
					<h2>Movies </h2>
					<div className="movie-list-line"></div>
				</div>
				<div data-aos="fade-down-right" className="movie-container">
					{renderMovies}
				</div>
			</div>
			<div className="movie-list">
				<div className="movie-list-header">
					<div className="movie-list-line"></div>
					<h2>Shows </h2>
					<div className="movie-list-line"></div>
				</div>
				<div data-aos="fade-down-left" className="movie-container">
					{renderShows}
				</div>
			</div>
		</div>
	);
};

export default MovieListing;
