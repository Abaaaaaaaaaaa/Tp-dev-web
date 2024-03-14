function Photo(props) {
  var src = "https://picsum.photos/"+props.size.widht+"/"+props.size.height
  return (
    <img id={props.id} className="photo" src={src} alt="" />
  )
}

export default Photo