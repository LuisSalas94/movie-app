import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { randomComments } from "../../common/comments-likes/randomComments";
import { randomLikes } from "../../common/comments-likes/randomLikes";

const MovieCard = (props) => {
	const { data } = props;

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
							<FontAwesomeIcon icon={faComment} className="random-button" />
							{randomComments}
						</span>
					</div>
				</div>
				<div className="action">
					<Link to={`/movie/${data.imdbID}`} className="button">
						<FontAwesomeIcon icon={faPlay} className="play-button" />
						Details
					</Link>
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
