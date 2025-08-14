import { END_POINTS } from "../../lib/constants";
import MoviesRow from "./MoviesRow";

import React from 'react'

function Movies() {
  return (
    <>
     <MoviesRow endpoint={END_POINTS.movie.now_playing} title={"Now Playing Movies"}/>
     <MoviesRow endpoint={END_POINTS.movie.top_rated} title={"Top Rated Movies"}/>
     <MoviesRow endpoint={END_POINTS.movie.popular} title={"Popular Movies"}/>
     <MoviesRow endpoint={END_POINTS.movie.upcoming} title={"Upcoming Movies"}/>
    </>
   
  )
}

export default Movies
