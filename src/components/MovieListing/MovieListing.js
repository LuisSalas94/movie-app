import React from "react";
import { useSelector } from "react-redux";
import "./MovieListing.scss";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
	const movies = useSelector((state) => state.movies.movies);
	const shows = useSelector((state) => state.movies.shows);

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
				<h2>Movies</h2>
				<div className="movie-container">{renderMovies}</div>
			</div>
			<div className="movie-list">
				<h2>Shows</h2>
				<div className="movie-container">{renderShows}</div>
			</div>
		</div>
	);
};

export default MovieListing;
