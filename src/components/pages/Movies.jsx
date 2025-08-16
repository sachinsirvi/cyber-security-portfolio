import { END_POINTS } from "../../lib/constants";
import MediaRow from "./MediaRow";

function Movies() {
  const movieCategories = [
    { endpoint: END_POINTS.movie.now_playing, title: "Now Playing Movies" },
    { endpoint: END_POINTS.movie.top_rated, title: "Top Rated Movies" },
    { endpoint: END_POINTS.movie.popular, title: "Popular Movies" },
    { endpoint: END_POINTS.movie.upcoming, title: "Upcoming Movies" }
  ];
  return (
    <section aria-label="Movies Section">
     {movieCategories.map((category)=> (<MediaRow key={category.title} endpoint={category.endpoint} title={category.title}/>))}
    </section>
  )
}

export default Movies
