import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Header.scss";
import { Link, Outlet } from "react-router-dom";
import {
	Navbar,
	Nav,
	Form,
	Button,
	FormControl,
	Container,
} from "react-bootstrap";
import {
	fetchAsyncMovies,
	fetchAsyncShows,
} from "../../features/movies/movieSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	const dispatch = useDispatch();
	const [term, setTerm] = useState("");
	const fetchMoviesOrShow = (e) => {
		e.preventDefault();
		dispatch(fetchAsyncMovies(term));
		dispatch(fetchAsyncShows(term));
		setTerm("");
	};

	return (
		<Navbar
			bg="myNavbar"
			variant="dark"
			expand="lg"
			onSubmit={fetchMoviesOrShow}
		>
			<Container fluid>
				<Navbar.Brand as={Link} to={"/"}>
					M<FontAwesomeIcon icon={faPlayCircle} className="circle-button" />
					Vstrem
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link as={Link} to={"/"}>
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/favorites">
							Favorites
						</Nav.Link>
						<Nav.Link as={Link} to="/pricing">
							Pricing
						</Nav.Link>
					</Nav>
					<Outlet />
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Movies or TV Shows"
							className="me-2"
							aria-label="Search"
							value={term}
							onChange={(e) => setTerm(e.target.value)}
						/>
						<Button variant="outline-secondary" onClick={fetchMoviesOrShow}>
							Search
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
