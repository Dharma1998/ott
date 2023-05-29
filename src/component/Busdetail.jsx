import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const Busdetail = () => {

    let[busdetail , setBusdetail] = useState(null);

   let {busid} =  useParams();
   useEffect(()=>{
        fetch("http://localhost:5000/bus/"+busid)
        .then((res)=>{ return res.json() })
        .then((data)=>{
                setBusdetail(data);
        })
   } , [])


    return ( 
        <div className="bus-detail">
            <Navbar/>
            {busdetail &&
                <div className="details">
                    <div>
                    <h1>Journey from {busdetail.from} to {busdetail.to}</h1>
                    <div className="bus-description">
                        <span>{busdetail.busname}</span>
                        <span>{busdetail.type}</span>
                        <span>{busdetail.busnumber}</span>
                    </div>
                    <div className="journey-description">
                        <h2>DATE</h2>
                        <div>
                            <h1>{busdetail.start} - {busdetail.end}</h1>
                            <h1>{busdetail.from} - {busdetail.to}</h1>
                        </div>
                        <p>{busdetail.journey_time}</p>
                    </div>
                    <div className="ticket-description">
                        <label>Passengers</label>  <input type="number" placeholder="Number of seats" min="1" max={busdetail.seats-busdetail.booked_seats} />
                        <label>Total Price</label> <input type="text" value={busdetail.price * 1} readOnly />
                    </div>
                    </div>
                    <div className="seat-selection">

                    </div>
                </div>
            }
        </div>
     );
}
 
export default Busdetail