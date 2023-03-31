

function Card(props) {
  console.log(props.image);
  return (
    <div className="card">
      <div className="link-card">
        <img src={props.image} className="img-card"/>
        <h3>{props.title}</h3>
        <p>{props.note}</p>
      </div>
    </div>
  );
}

export default Card;
