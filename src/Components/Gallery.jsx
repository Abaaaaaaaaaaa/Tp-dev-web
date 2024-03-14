import Photo from './Photo.jsx'

function Gallery() {
  var list = [{id:1, size:{widht:500, height:300}}, {id:2, size:{widht:200, height:300}}, {id:3, size:{widht:500, height:300}}]
    return (
      <div>
        <h1>Galerie de photos</h1>
        {list.map(info => 
          <Photo id={info.id} size={info.size}/>)
        }
      </div>
    )
}

export default Gallery