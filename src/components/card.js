import './styes/card.css'

export default function Card(props) {
  return (
    <div className="card" >
      <div className="card-img">
        <img src={props.img} alt="character" />
      </div>
      <div className="card-body">
        <h2>{props.name}</h2>
        <p>{props.des}</p>
      </div>
    </div>
  )
}
