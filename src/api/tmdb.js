const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const fetchTmdbApi = async (url, signal) => {
  try {
    const response = await fetch(url, {
      signal,
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    if (err.name === "AbortError") throw err;
    throw new Error(`Failed to fetch from ${url}: ${err.message}`);
  }
};

export default fetchTmdbApi;
