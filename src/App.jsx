import './App.css'

function Photo() {
    return (
      <img src="https://picsum.photos/500/300" alt="" />
    )
}

function Gallery() {
  return (
    <div>
      <h1>Galerie de photos</h1>
      <Photo/>
      <Photo/>
    </div>
  )
}

function App() {
  return (
    <div>
      <Gallery/>
    </div>
  )
}

export default App
