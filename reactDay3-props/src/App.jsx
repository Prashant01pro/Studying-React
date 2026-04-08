import { Moviecard } from "./components/MovieCard";
import { Navbar } from "./components/Navbar";
import { movies } from "./data.js";

function App() {
  return (
    <div>
      <Navbar />
      {/* Passing Props -always from parent component to child components , if have to pass number , variable then pass in {}*/}
      <div className="movie-body">
        {/* idx is the key for React to identify the element unique i.e basically index */}
        {/* render all the data in the array of object [data.js] with the map method*/}

        {movies.map((elem, idx) => {
          // console.log(idx)
          return (
            <div key={idx}>
              <Moviecard
                src={elem.src}
                title={elem.title}
                Genre={elem.genre}
                Stars={elem.stars}
                Language={elem.language}
                Quality={elem.quality}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
