import React, { useContext } from "react";
import { InfoModalContext } from "../context/InfoModalContext";

function InfoModal() {
  const { isModalOpen, modalData, closeModal } = useContext(InfoModalContext);
  
  if (!isModalOpen) return null;


  return (
    <>
      {/* {Backdrop} */}
      <div
        className="fixed inset-0 backdrop-blur z-50 bg-black/60"
        onClick={closeModal}
     ></div>
      {/* Modal */}
      <div className="fixed inset-0  flex flex-col  items-center justify-center z-50  ">
        <button
          className="font-bold text-red-500 cursor-pointer text-xl hover:text-yellow-300 "
          onClick={closeModal}
      >
          X
        </button>
        {/* Content */}
        <div className="flex  flex-col gap-2  w-full max-w-4xl rounded-lg bg-black/60 ">
          <div className="w-full aspect-video flex items-center justify-center border-b border-gray-800 ">
            Loading Image...
          </div>
          <div className=" w-full p-4 font-semibold text-center text-gray-300 border-b border-gray-800 ">
            {modalData.Title}
          </div>
          <div className=" w-full p-2 text-center text-gray-400 rounded-lg p-4">
            {modalData.Description}
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoModal;
