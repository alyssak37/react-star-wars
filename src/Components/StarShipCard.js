
function starShipCard(props) {
    return (
        
      <div className='card'>
       <h3>{props.ship.name}</h3>
       <p>{props.ship.model}</p>
       <p>{props.ship.manufacturer}</p>
       <p>{props.ship.passengers}</p>
       
        </div>
        
    )}

    export default starShipCard;