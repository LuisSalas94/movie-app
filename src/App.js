import "./App.scss";
//React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Favorites from "./components/Favorites/Favorites";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movie/:imdbID" element={<MovieDetail />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
