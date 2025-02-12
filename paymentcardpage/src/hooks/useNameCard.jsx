import { useState } from "react";
    function useNameCard() {
        const [name, setName] = useState('YOUR NAME');
        return(
            <div className="nameCard">
                <input  className="inputName" type="text" value={name} onChange={(e) =>setName(e.target.value)}/>
            <p  id="name" >{name}</p>
            </div>
        )    
    }

    export default useNameCard;