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

	return (
		<>
			<div className="favorites-title">
				<h1>Welcome To Your Favorites</h1>
			</div>
			<div className="favorites-container">{renderFavorite}</div>
		</>
	);
};

export default Favorites;
