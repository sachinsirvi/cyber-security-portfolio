import React, {createContext, useState} from "react";

const InfoModalContext = createContext();

function InfoModalProvider({children}){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    const openModal = (data) => {
        setModalData(data); 
        setIsModalOpen(true); 
      };
    
      const closeModal = () => {
        setModalData(null); 
        setIsModalOpen(false); 
      };
    return(
        <InfoModalContext.Provider value={{isModalOpen, modalData, openModal, closeModal }}>
            {children}
        </InfoModalContext.Provider>
    )
}

export {InfoModalContext, InfoModalProvider};