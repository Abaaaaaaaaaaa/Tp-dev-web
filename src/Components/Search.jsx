import { useState } from "react";

function Search({ onSearchTermUpdate }) {
    // État pour stocker le terme de recherche
    const [searchTerm, setSearchTerm] = useState('');

    // Fonction pour mettre à jour le terme de recherche et le renvoyer à App
    function handleSearch(event) {
        const term = event.target.value;
        setSearchTerm(term);
        // Appeler la fonction de mise à jour du terme de recherche dans App
        onSearchTermUpdate(term);
    }

    return (
        <div>
            <label htmlFor="input">Recherche par auteur : </label>
            <input className="input" type="text" onChange={handleSearch} />
        </div>
    )
}

export default Search