import "./DataCard.css";
import useNameCard from "../../hooks/useNameCard";
import useNumberCard from "../../hooks/useNumberCard";
function DataCard() {
    return (            
            <div className="container">
                <h4 className="name">cardholder name</h4>
                <i pattern="\d{4} \d{4} \d{4} \d{4}">{useNameCard()}</i>
                <h4 className="numberCard" >card number</h4>
                <i>{useNumberCard()}</i>
                <section className='dateCard'>
                <h4 className="date" >exp. date(mm/yy)</h4>
                <input className="inputMonth" type="number" placeholder='mm' />
                <input className="inputYears" type="number" placeholder='yy' />
                <h4 className="codeSecurity" >cvc</h4>
                <input className="codeNumber" type="number" placeholder='123'/>
                </section>
                <button className="button" >Confirm</button>

            </div>
    )
};



export default DataCard