import React, {createContext, useState} from "react";

const InfoModalContext = createContext();

function InfoModalProvider({children}){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null); // State to hold movie details

      // Function to open the modal with movie details
    const openModal = (data) => {
        setModalData(data); // Set the movie details
        setIsModalOpen(true); // Open the modal
      };
    
      const closeModal = () => {
        setModalData(null); // Clear the movie details
        setIsModalOpen(false); // Close the modal
      };
    return(
        <InfoModalContext.Provider value={{isModalOpen, modalData, openModal, closeModal }}>
            {children}
        </InfoModalContext.Provider>
    )

}

export {InfoModalContext, InfoModalProvider};