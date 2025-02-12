import { useState } from "react";

    function useNumberCard() {
        const [numberCard, setNumberCard] = useState('');
        return(
            <div className="numberCard">
                <input className="inputNumberCard" type="text" value={numberCard} onChange={(e) =>setNumberCard(e.target.value)}/>
                <p id="numberCard">{numberCard}</p>
            </div>
        )

    }

    export default useNumberCard;