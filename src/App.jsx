import './App.css'
import Search from './Components/Search.jsx'
import Gallery from './Components/Gallery.jsx'
import liste from './Components/Data.jsx'
import { useState } from "react";

function App() {

  var searchTerm;
  var filterliste

  const [photoFilter, setPhotoFilter] = useState(liste);

  const handleSearchTermUpdate = (searchTerm) => {
    setPhotoFilter(liste);
    filterliste = liste.filter(item => {
      return item.author.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setPhotoFilter(filterliste);
  };

  return (
    <div>
      {/* Passer la fonction de mise à jour du terme de recherche à Search */}
      <Search onSearchTermUpdate={handleSearchTermUpdate} />
      {/* Passer le terme de recherche à Gallery */}
      <Gallery liste={photoFilter} searchTerm={searchTerm} />
    </div>
  )
}

export default App
