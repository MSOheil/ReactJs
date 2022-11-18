import "./modal.css";

const Modal = ({ text, setShowModal }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col modal-background">
          <div className="modal-container">
            <div className="titleCloseBtn">
              <button onClick={setShowModal}>X</button>
            </div>

            <div className="title">
              <h1>افزودن خرید جدید</h1>
            </div>
            <div className="body">
              <input type="text" value="sfd" />
            </div>
            <div className="footer">
              <button>افزودن</button>
              <button id="cancelBtn">بستن X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
