import React, { useEffect } from "react";
import "./Hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHackerrank } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
	useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []);

	return (
		<>
			<div data-aos="fade-down-right" className="hero-movie">
				<span className="hero-welcome">
					Welcome
					<div className="hero-line"></div>
				</span>
				<div className="hero-movie-title">
					Let's Make Your <br /> Own Cinema
				</div>
				<div className="hero-movie-content">
					<p>
						MOVstrem has an extremely impressive film catalog for you to choose
						from. If you’re looking to watch an obscure film title—maybe a movie
						from decades prior—MOVstrem is the best choice. You also will have
						the ability to rent the most recently released films and recent home
						premieres.
					</p>
					<p>
						If there’s a movie currently only playing in theaters that you’re
						dying to see, MOVstrem can even help you view show times and
						purchase tickets for in person viewing.
					</p>
				</div>
				<div className="hero-movie-buttons">
					<button className="movie-btn">Show Plan</button>
					<button className="movie-btn left">Get Started</button>
				</div>
			</div>
			<div data-aos="fade-down-right" className="side-icons">
				<a
					href="https://www.linkedin.com/in/luisfernandosalasgave/"
					target={"_blank"}
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faLinkedin} className="icon" />
				</a>
				<a
					href="https://medium.com/@luisfernandosalasg"
					target={"_blank"}
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faMedium} className="icon" />
				</a>
				<a
					href="https://github.com/LuisSalas94"
					target={"_blank"}
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faGithub} className="icon" />
				</a>
				<a
					href="https://www.hackerrank.com/luisfernandosal2"
					target={"_blank"}
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faHackerrank} className="icon" />
				</a>
			</div>
		</>
	);
};

export default Hero;
