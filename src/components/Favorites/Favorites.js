import React from "react";
import { useSelector } from "react-redux";
import "./Favorites.scss";
import FavoriteCard from "../FavoriteCard/FavoriteCard";

const Favorites = () => {
	const movieOrShowSelected = useSelector((state) => state.favorites.favorites);
	let renderFavorite = "";
	renderFavorite = movieOrShowSelected.map((favorite, index) => {
		return <FavoriteCard key={index} data={favorite} />;
	});

	// const randomLikes = Math.floor(Math.random() * 200) + 1;
	// const randomComments = Math.floor(Math.random() * 15) + 1;
	// let titles = [];
	// let posts = [];

	// for (let i = 0; i < movieOrShowSelected.length; i++) {
	// 	titles.push(movieOrShowSelected[i].Title);
	// 	posts.push(movieOrShowSelected[i].Poster);
	// }

	// let renderPosters = "";
	// renderPosters = posts.map((poster) => {
	// 	return <img src={poster} alt="poster" />;
	// });

	// let renderTitles = "";
	// renderTitles = titles.map((title) => {
	// 	return <span className="info">{title}</span>;
	// });

	return <div className="favorites-container">{renderFavorite}</div>;
};

export default Favorites;
