import { END_POINTS } from "../../lib/constants";
import MediaRow from "./MediaRow";

import React from 'react'

function Movies() {
  return (
    <>
     <MediaRow endpoint={END_POINTS.movie.now_playing} title={"Now Playing Movies"}/>
     <MediaRow endpoint={END_POINTS.movie.top_rated} title={"Top Rated Movies"}/>
     <MediaRow endpoint={END_POINTS.movie.popular} title={"Popular Movies"}/>
     <MediaRow endpoint={END_POINTS.movie.upcoming} title={"Upcoming Movies"}/>
    </>
   
  )
}

export default Movies
