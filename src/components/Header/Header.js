import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import {
	Navbar,
	Nav,
	Form,
	Button,
	FormControl,
	Container,
} from "react-bootstrap";

const Header = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container fluid>
				<Navbar.Brand as={Link} to={"/"}>
					MOVstrem
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
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search Movies or TV Shows"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
