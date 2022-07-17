import "./Modal.css";
import ReactDOM  from "react-dom";

const Modal = ({ children, isOpen, closeModal }) => {

  const modalEventHandler = (e) => e.stopPropagation();


  return ReactDOM.createPortal(
    <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>

      <div className="modal-container" onClick={modalEventHandler}>
        <button className="modal-close" onClick={closeModal}>X</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  );  
};

export default Modal;

// {`modal ${isOpen && "is-open"}`}
// {`${isOpen ? "is-open" : "modal"}`}