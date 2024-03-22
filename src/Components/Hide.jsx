import { useState } from "react";

function Hide({ onHideUpdate }) {
    // État pour stocker le terme de recherche
    const [Hide, setHide] = useState('');

    // Fonction pour mettre à jour le terme de recherche et le renvoyer à App
    function handleHide(event) {
        const bool = event.target.checked;
        setHide(bool);
        // Appeler la fonction de mise à jour du terme de recherche dans App
        onHideUpdate(bool);
    }

    return (
        <div>
            <input className="hide" type="checkbox" onChange={handleHide} />
            <label htmlFor="hide"> : Hide id</label>
        </div>
    )
}

export default Hide