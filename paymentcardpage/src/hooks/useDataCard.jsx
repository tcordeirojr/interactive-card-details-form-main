import { useState } from "react";
    function useDataCard() {
        const [name, setName] = useState('');
        return(
            <div className="name22">
                <input className="inputName" type="text" value={name} onChange={(e) =>setName(e.target.value)}/>
            <p id="name" >{name}</p>
            </div>
        )    
    }

    export default useDataCard;