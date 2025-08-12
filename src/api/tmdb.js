
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const fetchTmdbApi = async (url) => {
    try{
        const response = await fetch(url,{
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
                accept: "application/json"
            }
        });
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }catch (err) {
        throw new Error("Error fetching data:", err);
    }
}

export default fetchTmdbApi;


