import React, {useState, useEffect} from "react";
import './ClockFunctional.css';

const CloackFunctional = (props) => {

    const [date, setDate] = useState(new Date())    
    const tick = () => {setDate(new Date)};
    useEffect(() => {
        let timerID = setInterval(()=>{tick()}, 1000);
    }, [date]);

    return(
        <div className="clock">
            <h4>Time: {date.toLocaleTimeString()} <span onClick={props.toggleClockMethod}>X</span></h4>
        </div>
    );
}

export default CloackFunctional;