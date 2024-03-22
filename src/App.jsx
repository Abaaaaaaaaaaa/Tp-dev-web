import './App.css'
import Search from './Components/Search.jsx'
import Gallery from './Components/Gallery.jsx'
import Hide from './Components/Hide.jsx'
import liste from './Components/Data.jsx'
import { useState } from "react";

function App() {

  var searchTerm;
  var filterliste

  const [photoFilter, setPhotoFilter] = useState(liste);

  var bool;

  const [hide, setHide] = useState(false);

  const handleSearchTermUpdate = (searchTerm) => {
    setPhotoFilter(liste);
    filterliste = liste.filter(item => {
      return item.author.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setPhotoFilter(filterliste);
  };

  const handleHideUpdate = (bool) => {
    setHide(bool)
  };

  return (
    <div>
      <Search onSearchTermUpdate={handleSearchTermUpdate} />
      
      <Hide onHideUpdate={handleHideUpdate}/>

      <Gallery liste={photoFilter} searchTerm={searchTerm} hide={hide}/>
    </div>
  )
}

export default App
