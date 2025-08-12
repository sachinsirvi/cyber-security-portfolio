import { END_POINTS } from "../../lib/constants";
import TvRow from "./TvRow";

import React from 'react'

function Tv() {
  return (
    <>
     <TvRow endpoint={END_POINTS.tv.airing_today} title={"Airing Today Tv Shows"}/>
     <TvRow endpoint={END_POINTS.tv.popular} title={"Popular Tv Shows"}/>
     <TvRow endpoint={END_POINTS.tv.top_rated} title={"Top Rated Tv Shows"}/>
     <TvRow endpoint={END_POINTS.tv.on_the_air} title={"On The Air Tv Shows"}/>
    </>
   
  )
}

export default Tv
