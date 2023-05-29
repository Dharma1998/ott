import { useRef, useState } from "react";
import Navbar from "./Navbar";

const Bookbus = () => {
    let from  = useRef();
    let to  = useRef();
    let date = useRef();

    let[searchedBus , setSearchedBus] = useState(null);

    let handleSearchBuses = (e)=>{
        e.preventDefault();

        fetch("http://localhost:4000/bus")
        .then((res)=>{return res.json()})
        .then((allBus)=>{
           let filteredBus =  allBus.filter((bus)=>{ 
                            return (bus.from.includes( from.current.value )) &&
                                   (bus.to.includes(to.current.value)) 
                        });

            console.log(filteredBus);
            setSearchedBus(filteredBus);
        })

    }


    return ( 
        <div className="book-bus">
            <Navbar/>
            <div className="inputs">
                <h1>Search for the destination</h1>
                 <form onSubmit={handleSearchBuses}>
                    <input type="text" placeholder="From" required ref={from} />
                    <input type="text" placeholder="to" required ref={to}/>
                    <input type="date" required ref={date}/>
                    <input type="submit" value="Search bus"/>
                </form>
            </div>



            {searchedBus && <div className="bus-list">
                <hr />
                <h3>Bus list for the destination you have searched</h3>
                {
                    searchedBus.map((bus)=>{
                        return(
                            <div className="bus">
                                <div>
                                    <h3>{bus.busname}</h3>
                                    <div>
                                        <span>{bus.from} -- to -- {bus.to}  </span>  
                                    </div>

                                    <div>
                                        <span>{bus.start} -- {bus.journey_time} hrs -- {bus.end}  </span>  
                                    </div>
                                </div>
                                <div>
                                    <p>Available : {bus.seats - bus.booked_seats} </p>
                                    <p>Type : {bus.type} </p>
                                    <p>Price : {bus.price} </p>
                                    <p>rating : {bus.rating} </p>
                                    <button disabled={ bus.seats === bus.booked_seats ? true : false }> Book </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>}


        </div>
     );
}
export default Bookbus;