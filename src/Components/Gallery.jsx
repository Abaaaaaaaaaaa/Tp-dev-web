import Photo from './Photo.jsx';


function Gallery(props) {
  
  var size;

  return (
      <div>
        <h1>Galerie de photos</h1>
        <p>{props.searchTerm}</p>
        {props.liste.map(info => 
          <Photo key={info.id} id={info.id} size={size = {width:info.width, height:info.height}} author={info.author}/>)
        }
      </div>
    )
}

export default Gallery