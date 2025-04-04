import React, { useRef } from "react";
import useCrud from "../hooks/useCrud";
import funcionesBtn from "../hooks/funcionesBtn";

const FormNotes = ({ btn, onClose }) => {
  const { addNotesF } = useCrud();
  const { limpiarTxt } = funcionesBtn();
  const tituloRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNotesF({
      tituloRef,
      descriptionRef,
    });
    limpiarTxt({ tituloRef, descriptionRef });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Titulo</label>
        <input
          ref={tituloRef}
          type="text"
          id="txtTitulo"
          className="form-control"
          placeholder="Titulo"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Descripcion</label>
        <textarea
          placeholder="Descripción"
          ref={descriptionRef}
          className="form-control"
          id="txtDescription"
          rows="3"
        ></textarea>
      </div>
      <div className="modalFooter d-flex justify-content-end gap-2">
        <button type="button" className="btn btn-danger" onClick={onClose}>
          Cerrar
        </button>
        <button type="submit" className="btn btn-primary">
          {btn}
        </button>
      </div>
    </form>
  );
};

export default FormNotes;
