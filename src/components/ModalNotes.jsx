import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import FormNotes from "./FormNotes";

export function ModalNotes({ isOpen, closeModal, title, btn }) {
  const handleModalContainer = (e) => e.stopPropagation();

  return (
    <article className={`mymodal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="mymodal-container bg-dark text-white" onClick={handleModalContainer}>
        <button className="mymodal-close" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        {/** Modal Header **/}
        <div className="modalHeader">
          <h3 className="modalTitle">{title}</h3>
        </div>
        {/** Modal Body **/}
        <div className="modalBody">
          {/* ✅ PASAMOS closeModal para que el botón "Cerrar" funcione */}
          <FormNotes btn={btn} onClose={closeModal} />
        </div>
      </div>
    </article>
  );
}

export default ModalNotes;
