import { useState } from "react";
function useDate() {
    const [month , setMonth] = useState('');
    const  [years , setYears] = useState('');
    return(
        <div id="date">
            <input className="inputMonth" type="number" placeholder='mm' value={month} onChange={(e) =>setMonth(e.target.value)} />
            <input className="inputYears" type="number" placeholder='yy'value={years} onChange={(e) =>setYears(e.target.value)} />
            <p>{month}</p>
            <p>{years}</p>
        </div>
    )
};

export default useDate;