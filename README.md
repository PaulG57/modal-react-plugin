**modal-react-plugin** est un composant React léger et simple permettant d’afficher une fenêtre modale réutilisable.  
Ce composant est conçu pour afficher des messages de confirmation ou d’information dans le cadre du projet HRnet.  
Il est facile à intégrer dans n'importe quel projet React
---

## ⚙️ Prérequis

Pour utiliser ce composant, assurez-vous d’avoir :

- Un projet React
- Node.js et npm installés
- React ≥ 18

---

## 💾 Installation

Installez le composant via npm depuis le terminal de votre projet :

bash
npm install modal-react-hrnet

## Integration 

import { Modal } from 'modal-react-hrnet';


Utiliser le composant Modal dans votre JSX
Dans votre composant, ajoutez le composant <Modal /> et configurez-le à l'aide de trois accessoires (props) essentiels :

isOpen (booléen) : détermine si la modale doit être affichée (true) ou non (false).

message (string ou JSX) : définit le contenu ou le message à afficher dans la modale.

onClose (fonction) : callback appelée pour fermer la modale, par exemple en mettant à jour l'état.

--- 

## Exemple d'utilisation

```jsx
import { Modal } from 'modal-react-hrnet';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpenModal}>Ouvrir la modale</button>
            <Modal isOpen={isOpen} message="Contenu de la modale" onClose={handleCloseModal} />
        </div>
    );
}   
```	
