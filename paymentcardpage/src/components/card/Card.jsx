
import "./Card.css"

function Card() {
    return(
<div className="images">
                <a  href="#">
                    <img className="imgFront" src="./src/assets/bg-card-front.png" alt="" ></img>
                    <img className="logo" src="./src/assets/card-logo.svg" alt="" />
                    <input className="numberApresentation" type="number" />
                    <input className="nameApresentation" type="text" />
                </a> 
                <a href="#">
                    <img className="imgBack" src="./src/assets/bg-card-back.png" alt="" />
                    <input className="cvcApresentation" type="number" />
                </a>
                

            </div>
)}


export default Card