import "../style/Modal.css";
import Form from "./Form";

const Modal = ({ isOpenModal, closeModal }) => {
  const handleClickModalInside = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`modal ${isOpenModal && "modal-open"}`}
      onClick={closeModal}
    >
      <div className="modal-inside" onClick={handleClickModalInside}>
        <button onClick={closeModal}>Close</button>
        <Form />
      </div>
    </div>
  );
};

export default Modal;
