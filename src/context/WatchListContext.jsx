import { createContext, useState, useEffect } from "react";

const WatchListContext = createContext();

const WatchlistContextProvider = ({ children }) => {
  const [watchList, setWatchList] = useState(() => {
    // Initialize state from local storage
    const savedList = localStorage.getItem("myWatchList");
    return savedList ? JSON.parse(savedList) : [];
  });

  useEffect(() => {
    localStorage.setItem("myWatchList", JSON.stringify(watchList));
  }, [watchList]);

  const toggleWatchlist = (newData) => {
    if (!watchList.some((item) => item.id === newData.id)) {
      // Add 
      setWatchList((prevList) => [...prevList, newData]);
    } else {
      // Remove 
      setWatchList((prevList) => prevList.filter((item) => item.id !== newData.id));
    }
  };

  return (
    <WatchListContext.Provider value={{ toggleWatchlist, watchList }}>
      {children}
    </WatchListContext.Provider>
  );
};

export { WatchListContext, WatchlistContextProvider };