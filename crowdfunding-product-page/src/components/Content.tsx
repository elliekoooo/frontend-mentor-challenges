import React, { useEffect, useState } from "react";
import Modal from "./Modal";


const Content = () =>{

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className="container">
      <div>
          <button type="button" className="button" onClick={openModal}>모달</button>
      </div>
      <Modal isOpen = {isOpen} closeModal = {closeModal}/>
    </div>
  );
}

export default Content;

