import "../assets/styles/Modal.css";

const Modal = ({children, isOpen}) => {

  const modalEventHandler = (e) => e.stopPropagation();

  return (
    <>
      <div className={`modal ${isOpen && "is-open"}`}>
        <div className="modal-container" onClick={modalEventHandler}>
          {children}
        </div>
      </div>
    </>
  )
};

export default Modal;
