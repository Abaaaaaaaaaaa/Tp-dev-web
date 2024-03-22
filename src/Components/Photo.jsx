function Photo(props) {
  var src = "https://picsum.photos/id/"+props.id+"/"+props.size.width+"/"+props.size.height

  if (!props.hide) {
    return (
      <p>{props.author} (#{props.id})<br/>
        <img id={props.id} className="photo" src={src} alt="" />
      </p>
    )
  }else {
    return (
      <p>{props.author}<br/>
        <img id={props.id} className="photo" src={src} alt="" />
      </p>
    )
  }
}

export default Photo