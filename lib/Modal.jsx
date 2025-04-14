import './Modal.css';

// Composant Modal qui affiche une fenêtre modale si isOpen est vrai
export function Modal({ isOpen, message, onClose }) {
  if (!isOpen) return null; // Ne rien afficher si isOpen est false

  return (
    // Conteneur de fond qui ferme la modale en cas de clic
    <div onClick={onClose} className="modal-backdrop">
      {/* Contenu de la modale avec arrêt de la propagation du clic */}
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <p>{message}</p> {/* Affiche le contenu passé en prop message */}
        <button onClick={onClose}>X</button> {/* Bouton pour fermer la modale */}
      </div>
    </div>
  );
}