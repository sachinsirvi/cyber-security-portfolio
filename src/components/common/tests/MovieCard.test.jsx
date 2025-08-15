// import React from "react";
// import { render, screen } from "@testing-library/react";
// import MovieCard from "../MovieCard";
// import { test, expect, jest } from "@jest/globals";
// import { InfoModalContext } from "../../../context/InfoModalContext";
// import { WatchListContext } from "../../../context/WatchListContext";

// test("renders MovieCard with title and image", () => {
//   // Mock the contexts
//   const mockOpenModal = jest.fn();
//   const mockToggleWatchlist = jest.fn();
//   const mockWatchList = [];

//   const mockData = {
//     id: 1,
//     title: "Test Movie",
//     overview: "This is a test movie.",
//     vote_average: 8.5,
//     popularity: 100,
//   };

//   render(
//     <InfoModalContext.Provider value={{ openModal: mockOpenModal }}>
//       <WatchListContext.Provider
//         value={{ toggleWatchlist: mockToggleWatchlist, watchList: mockWatchList }}
//       >
//         <MovieCard
//           imgSrc="https://via.placeholder.com/150"
//           title="Test Movie"
//           isPortrait={true}
//           data={mockData}
//         />
//       </WatchListContext.Provider>
//     </InfoModalContext.Provider>
//   );

//   // Check if the title is rendered
//   expect(screen.getByText("Test Movie")).toBeInTheDocument();

//   // Check if the image is rendered
//   const image = screen.getByAltText("Test Movie");
//   expect(image).toBeInTheDocument();
//   expect(image).toHaveAttribute("src", "https://via.placeholder.com/150");
// });