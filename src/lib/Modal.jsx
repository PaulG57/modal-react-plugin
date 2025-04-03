import './Modal.css';

export function Modal({ isOpen, message, onClose }) {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="modal-backdrop">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
}