import { useState } from 'react';
import { Modal } from './lib/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>Test de ma modale</h1>
      <button onClick={() => setIsOpen(true)}>Ouvrir la modale</button>

      <Modal
        isOpen={isOpen}
        message=" Employee Created ! "
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export default App;