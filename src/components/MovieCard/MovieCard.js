import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

const MovieCard = (props) => {
	const { data } = props;
	const randomLikes = Math.floor(Math.random() * 200) + 1;
	const randomComments = Math.floor(Math.random() * 15) + 1;
	let renderInfo = "";
	renderInfo = false ? (
		<button className="button">
			<i className="fa-solid fa-xmark"></i>
			Remove
		</button>
	) : (
		<Link to={`/movie/${data.imdbID}`} className="button">
			<FontAwesomeIcon icon={faPlay} className="play-button" />
			Details
		</Link>
	);

	return (
		<div className="movie">
			<div className="movie-image">
				<img src={data.Poster} alt={data.Title} />
			</div>
			<div className="movie-info">
				<p className="title">{data.Title}</p>
				<div className="movie-text">
					<div className="likes">
						<span>
							<FontAwesomeIcon icon={faThumbsUp} className="random-button" />
							{randomLikes}
						</span>
						<span>
							<FontAwesomeIcon icon={faHeart} className="random-button" />
							{randomComments}
						</span>
					</div>
				</div>
				<div className="action">
					{renderInfo}
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

export default MovieCard;
