import { Moviecard } from "./components/MovieCard";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      {/* Passing Props -always from parent component to child components , if have to pass number , variable then pass in {}*/}
      <div className="movie-body">
        <Moviecard
          src="https://img.youtube.com/vi/CN0lNff-zm0/maxresdefault.jpg"
          title="Dhurandhar : The Revenge"
          Genre="Action | Crime | Drama"
          Stars="Ranveer Singh, Akshaye Khanna, Sanjay Dutt"
          Language="Dual Audio [Hindi + English]"
          Quality="WEB-DL 4K | 1080p | 720p | 480p"
        />
        <Moviecard
          src="https://image.tmdb.org/t/p/w500/stM9N7eJmHKLmFR59JG4tLdN7Wk.jpg"
          title="Do Not Enter "
          Genre="Horror"
          Stars="Francesca Reale, Nicholas Hamilton, Adeline Rudolph"
          Language="Dual Audio [Hindi + English]"
          Quality="WEB-DL 4K | 1080p | 720p | 480p"
        />
        <Moviecard
          src="https://image.tmdb.org/t/p/w500/xsGtM5RYtlfpDiqCqkH72JRAulN.jpg"
          title="Bloodhounds (Season 2) (Full Series)"
          Genre="Drama | Action & Adventure | Crime"
          Stars="https://www.themoviedb.org/tv/127529-hounds"
          Language="Dual Audio [Hindi + English]"
          Quality="WEB-DL 4K | 1080p | 720p | 480p"
        />
      </div>
    </div>
  );
}

export default App;
