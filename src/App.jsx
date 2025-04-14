import { useState } from 'react';
import { Modal } from './lib/Modal';

// Composant principal démontrant l'utilisation de la modale
function App() {
  const [isOpen, setIsOpen] = useState(false); // isOpen : contrôle l'affichage de la modale

  return (
    <>
      <h1>Test de ma modale</h1>
      {/* Bouton pour ouvrir la modale */}
      <button onClick={() => setIsOpen(true)}>Ouvrir la modale</button>

      <Modal
        isOpen={isOpen}               // isOpen : détermine si la modale doit être affichée
        message=" Employee Created ! " // message : contenu affiché dans la modale
        onClose={() => setIsOpen(false)} // onClose : fonction pour fermer la modale
      />
    </>
  );
}

export default App;