import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import MovieList from "./components/MovieList/MovieList";
import NavigationBar from "./components/NavigationBar";

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <Banner />
            <MovieList />
            <Footer />
        </div>
    );
}

export default App;
