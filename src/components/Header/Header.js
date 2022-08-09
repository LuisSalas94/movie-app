import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					MOVstrem
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-mdb-toggle="collapse"
					data-mdb-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i className="fas fa-bars"></i>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								MovieApp
							</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Favorites
							</a>
						</li>
					</ul>
					<form className="d-flex input-group w-auto">
						<input
							type="search"
							className="form-control"
							placeholder="Search Movies or TV Shows"
							aria-label="Search"
						/>
						<button
							className="btn btn-outline-info"
							type="button"
							data-mdb-ripple-color="dark"
						>
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Header;
