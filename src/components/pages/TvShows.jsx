
import { END_POINTS } from "../../lib/constants";
import MediaRow from "./MediaRow";

function TvShows() {
  const tvCategories = [
    { endpoint: END_POINTS.tv.airing_today, title: "Airing Today Tv Shows" },
    { endpoint: END_POINTS.tv.on_the_air, title: "On The Air Tv Shows" },
    { endpoint: END_POINTS.tv.popular, title: "Popular Tv Shows" },
    { endpoint: END_POINTS.tv.top_rated, title: "Top Rated Tv Shows" }
  ];
  return (
    <section aria-label="Tv Shows Section">
     {tvCategories.map((category)=> (<MediaRow key={category.title} endpoint={category.endpoint} title={category.title}/>))}
    </section>
  )
}

export default TvShows
