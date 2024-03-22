import './App.css';
import Search from './Components/Search.jsx';
import Gallery from './Components/Gallery.jsx';
import Hide from './Components/Hide.jsx';
import liste from './Components/Data.jsx';
import axios from 'axios';
import { useEffect, useState } from "react";

function App() {

  var searchTerm;
  var filterliste;

  var bool;

  const [photoFilter, setPhotoFilter] = useState("");
  const [hide, setHide] = useState(false);
  const [pics, setPics] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://picsum.photos/v2/list');
        // Simuler une connexion lente en ajoutant un délai
        setTimeout(() => {
          setPics(response.data);
          setPhotoFilter(response.data);
          setLoading(false);
        }, 2000);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearchTermUpdate = (searchTerm) => {
    setPhotoFilter(pics);
    filterliste = pics.filter(item => {
      return item.author.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setPhotoFilter(filterliste);
  };

  const handleHideUpdate = (bool) => {
    setHide(bool)
  };

  return (
    <div>
      {loading ? (
        <div className="spinner"></div> // Affichage du spinner si loading est vrai
      ) : error ? (
        <div className="error-message">Erreur: {error}</div>
      ) : (
        <div>
          <Search onSearchTermUpdate={handleSearchTermUpdate} />
        
          <Hide onHideUpdate={handleHideUpdate}/>

          <Gallery liste={photoFilter} searchTerm={searchTerm} hide={hide}/>
        </div>
      )}
      
    </div>
  )
}

export default App
