import './App.css'
import Gallery from './Components/Gallery.jsx'
import liste from './Components/Data.jsx'

function App() {
  return (
    <div>
      <Gallery liste={liste}/>
    </div>
  )
}

export default App
