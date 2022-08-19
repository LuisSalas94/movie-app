import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncmovieOrShow } from "../../features/movies/movieSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { addToFavorites } from "../../features/favorites/favoritesSlice";
import { toast } from "react-toastify";
import Aos from "aos";
import "aos/dist/aos.css";

const MovieDetail = () => {
	const { imdbID } = useParams();
	const dispatch = useDispatch();
	const data = useSelector((state) => state.movies.movieOrShow);

	useEffect(() => {
		dispatch(fetchAsyncmovieOrShow(imdbID));
	}, [dispatch, imdbID]);

	useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []);

	//Add to favorites
	const addMovieOrShowToFavorites = () => {
		dispatch(addToFavorites(data));
		toast.success(`${data.Title} was added to favorites`);
	};

	const randomLikes = Math.floor(Math.random() * 200) + 1;
	const randomComments = Math.floor(Math.random() * 15) + 1;

	return (
		<div data-aos="fade-down-right" className="movie-detail">
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

						<Link
							to="/favorites"
							className="detail-btn"
							onClick={addMovieOrShowToFavorites}
						>
							Add to favorites
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetail;
