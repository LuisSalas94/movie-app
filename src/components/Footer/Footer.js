import React, { useEffect } from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faHackerrank } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<footer className="page-footer font-small blue pt-4">
			<div
				data-aos="fade-up-right"
				className="container-fluid text-center text-md-left"
			>
				<div className="row">
					<div className="col-md-6 mt-md-0 mt-3">
						<h5 className="text-uppercase">
							M
							<FontAwesomeIcon icon={faPlayCircle} className="circle-button" />
							Vstrem
						</h5>
						<p>
							MOVstremNow is the streaming service offered by MOVstrem. With no
							annual subscription, you can access over 150,000 free titles to
							watch instantaneously. These include everything from classics to
							recent releases. If you can’t find anything to watch, you can
							download any movie rental imaginable for a set fee. The one
							interesting aspect about MOVstremNow is its rental period. Once
							you rent a movie, you’ll have 30 days to press Watch Now. However,
							after pressing this button, you’ll only have 48 hours to complete
							the title.
						</p>
					</div>

					<hr className="clearfix w-100 d-md-none pb-0" />

					<div className="col-md-3 mb-md-0 mb-3">
						<h5 className="text-uppercase">Contact Me</h5>
						<ul className="list-unstyled">
							<li>
								<a
									href="https://www.linkedin.com/in/luisfernandosalasgave/"
									target={"_blank"}
									rel="noreferrer"
								>
									<FontAwesomeIcon icon={faLinkedin} className="icon" />
								</a>
							</li>
							<li>
								<a
									href="https://medium.com/@luisfernandosalasg"
									target={"_blank"}
									rel="noreferrer"
								>
									<FontAwesomeIcon icon={faMedium} className="icon" />
								</a>
							</li>
							<li>
								<a
									href="https://github.com/LuisSalas94"
									target={"_blank"}
									rel="noreferrer"
								>
									<FontAwesomeIcon icon={faGithub} className="icon" />
								</a>
							</li>
							<li>
								<a
									href="https://www.hackerrank.com/luisfernandosal2"
									target={"_blank"}
									rel="noreferrer"
								>
									<FontAwesomeIcon icon={faHackerrank} className="icon" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="footer-copyright text-center py-3">
				© 2022 Copyright: Made by
				<a
					href="https://www.linkedin.com/in/luisfernandosalasgave/"
					target={"_blank"}
					rel="noreferrer"
				>
					{" "}
					Fernando Salas
				</a>
			</div>
		</footer>
	);
};

export default Footer;
