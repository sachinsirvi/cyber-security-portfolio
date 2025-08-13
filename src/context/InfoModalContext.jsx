import React, { createContext, useState } from "react";

const InfoModalContext = createContext();

const InfoModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [modalContent, setModalContent] = useState(null);

  const openModal = (data) => {
    setModalContent(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  }

  return (
    <InfoModalContext.Provider value={{ isModalOpen, openModal, closeModal , modalContent}}>
      {children}
    </InfoModalContext.Provider>
  );
};

export { InfoModalContext, InfoModalProvider };