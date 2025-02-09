import { useState } from "react";
    function useDataCard() {
        const [name, setName] = useState('');
        return(
            <div>
                <input className="inputName" type="text" value={name} onChange={(e) =>setName(e.target.value)} placeholder="Your Name" />
            <p id="name" >{name}</p>
            </div>
        )    
    }

    export default useDataCard;