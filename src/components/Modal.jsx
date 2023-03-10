import '../styles/modal.css';
import ReactDOM from 'react-dom';

export default function Modal({ showModal, setShowModal }) {

    if (showModal === null) return null;

    return ReactDOM.createPortal(
        <div className="overlay"  >
            <div className="modalview">
              <div> <button className="modalview-btn" onClick={() => setShowModal(null)}>X</button> </div>
               <div className="modal-content"> {showModal}</div>
           </div>
        </div>
        , document.getElementById("portal")
    )
};