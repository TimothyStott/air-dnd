export default function Card(props) { 

    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }   
    else if(props.location === "online"){
        badgeText = "ONLINE"
    }
    return (
        <div className="card-container">
            <div className="card-photo-area">
                <img src={props.img} alt={props.imgAlt} className="cardphoto"></img>
                 {/*this checks if badgeText has a value/is truthy*/}
                 {badgeText && <div className="availability-text-container">
                     <p className="availability-text">{badgeText}</p>                    
                </div>}
            </div>
            <div className="card-text-container">
                <div className="ratings-text-container">
                    <img src={props.star} className="star-image"></img>
                    <p className="">{props.rating} ({props.numberOfRatings}) {props.location}</p>
                </div>
                <div className="description-text-container">
                    <p>{props.description}</p>
                </div>
                <div className="pricing-text-container">   
                    <p><span id="pricing-span">{props.pricing}</span> / person</p>
                </div>
            </div>
        </div>
    )
}