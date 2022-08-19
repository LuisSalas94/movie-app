import React from "react";
import { useDispatch } from "react-redux";
import "./FavoriteCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { removeFromFavorites } from "../../features/favorites/favoritesSlice";

const FavoriteCard = (props) => {
	const { data } = props;
	const id = data.imdbID;
	const dispatch = useDispatch();

	const randomLikes = Math.floor(Math.random() * 200) + 1;
	const randomComments = Math.floor(Math.random() * 15) + 1;

	const removeMovieOrShow = () => {
		dispatch(removeFromFavorites(id));
		toast.success(`${props.data.Title} was removed from favorites`);
	};

	return (
		<div className="favorite-movie">
			<div className="favorite-movie-image">
				<img src={props.data.Poster} alt={props.data.Title} />
			</div>
			<div className="favorite-movie-info">
				<p className="favorite-title">{props.data.Title}</p>
				<div className="favorite-movie-text">
					<div className="favorite-likes">
						<span>
							<FontAwesomeIcon icon={faThumbsUp} className="random-button" />
							{randomLikes}
						</span>
						<span>
							<FontAwesomeIcon icon={faComment} className="random-button" />
							{randomComments}
						</span>
					</div>
				</div>
				<div className="favorite-action">
					<button className="button" onClick={removeMovieOrShow}>
						<FontAwesomeIcon
							icon={faTrash}
							className="random-button trash-btn"
						/>
						Remove
					</button>
					<div className="actions-more">
						<FontAwesomeIcon icon={faSave} className="icon" />
						<FontAwesomeIcon icon={faBookmark} className="icon" />
						<FontAwesomeIcon icon={faShareAlt} className="icon" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FavoriteCard;
