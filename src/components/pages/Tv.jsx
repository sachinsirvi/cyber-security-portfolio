import { END_POINTS } from "../../lib/constants";
import MediaRow from "./MediaRow";

import React from 'react'

function Tv() {
  return (
    <>
     <MediaRow endpoint={END_POINTS.tv.airing_today} title={"Airing Today Tv Shows"}/>
     <MediaRow endpoint={END_POINTS.tv.top_rated} title={"Top Rated Tv Shows"}/>
     <MediaRow endpoint={END_POINTS.tv.popular} title={"Popular Tv Shows"}/>
     <MediaRow endpoint={END_POINTS.tv.on_the_air} title={"On The Air Tv Shows"}/>
    </>
   
  )
}

export default Tv
