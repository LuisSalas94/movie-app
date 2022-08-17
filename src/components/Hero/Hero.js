import React from "react";
import "./Hero.scss";
import mask2 from "../../assets/mask2.png";

const Hero = () => {
	return (
		<div className="hero-movie">
			<div className="movie-left">
				<div className="hero-movie-title">
					Let's Make Your <br /> Own Cinema
				</div>
				<div className="hero-movie-content">
					<p>
						You can still enjoy the latest movies and shows <br /> online and at
						a lower price
					</p>
				</div>
				<div className="hero-movie-buttons">
					<button className="movie-btn">Show Plan</button>
					<button className="movie-btn left">Get Started</button>
				</div>
			</div>
			<div className="movie-right">
				<img src={mask2} alt="batman img" />
			</div>
		</div>
	);
};

export default Hero;
