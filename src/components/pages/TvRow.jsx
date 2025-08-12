import React, { useEffect } from "react";
import fetchTmdbApi from "../../api/tmdb";

function TvRow({endpoint, title}) {
  useEffect(() => {
    fetchTmdbApi(endpoint)
      .then((data) => console.log("endpoint",endpoint, "data", data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [endpoint]);

  return (
    <div className="p-4 border-b border-gray-700 h-60">
      <h1>{title}</h1>
    </div>
  );
}

export default TvRow;
