import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncmovieOrShow } from "../../features/movies/movieSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const MovieDetail = () => {
	const { imdbID } = useParams();
	const dispatch = useDispatch();
	const data = useSelector((state) => state.movies.movieOrShow);

	useEffect(() => {
		dispatch(fetchAsyncmovieOrShow(imdbID));
	}, [dispatch, imdbID]);

	const randomLikes = Math.floor(Math.random() * 200) + 1;
	const randomComments = Math.floor(Math.random() * 15) + 1;

	return (
		<div className="movie-detail">
			<div className="movie-image image-detail">
				<img src={data.Poster} alt={data.Title} />
			</div>
			<div className="movie-info">
				<p className="title">
					<span className="info">Title:</span> {data.Title}
				</p>
				<p className="title">
					<span className="info">Year: </span>
					{data.Year}
				</p>
				<p className="genres">
					<span className="info">Genres:</span> {data.Genre}
				</p>
				<p className="genres">
					<span className="info">Rating:</span> {data.imdbRating}
				</p>
				<div className="movie-text">
					<p>
						<span className="info">Director:</span> {data.Director}
					</p>
					<div className="likes">
						<span>
							<FontAwesomeIcon icon={faThumbsUp} className="randon-button" />
							{randomLikes}
						</span>
						<span>
							<FontAwesomeIcon icon={faComment} className="randon-button" />
							{randomComments}
						</span>
					</div>
				</div>
				<div className="summary">
					<p className="text">{data.Plot}</p>
					<p className="cast">
						<span className="info">Actors:</span> {data.Actors}
					</p>
				</div>
				<div className="action">
					<div className="actions-more">
						<Link to="/" className="detail-btn">
							Go Back
						</Link>

						<Link to="/favorites" className="detail-btn">
							Add to favorites
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetail;
