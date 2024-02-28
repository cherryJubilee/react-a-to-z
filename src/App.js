import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import HomePage from "./pages/HomePage/HomePage";
import MoviesDetailPage from "./pages/MoviesDetailPage/MoviesDetailPage";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies/:movieId" element={<MoviesDetailPage />} />
                <Route path="/search" element={<SearchPage />} />
            </Route>
        </Routes>
    );
}

export default App;
