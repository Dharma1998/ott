import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'

const Home1 = () => {

    let inp = useRef();
    let [place,setPlace] = useState(null);
    let [state,setState]=useState(false)

    
       function findPlace() {
        const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=fishermans%20wharf&language=en';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
          }
                };

            fetch(url, options)
            .then((res) => { return res.json() })
            .then((data) => { console.log(data);
                setPlace(data)
            setState(true) })
        }

    return ( 
        <div className="home">
            <h1>MeteosourceWeather</h1> 
            <input type="text" ref={inp} />
            <input type="submit" onClick={findPlace}/>
            {   state &&
                place.map((m)=>{return (
                    <div>
                        <h1>name: {m.name}</h1>
                        <h1>place_id: {m.place_id}</h1>
                        <h1>adm_area1: {m.adm_area1}</h1>
                        <h1>adm_area2: {m.adm_area2}</h1>
                        <h1>country: {m.country}</h1>
                        <Link to={"/"}><h1>lat: {m.lat}</h1></Link>
                        <h1>lon: {m.lon}</h1>
                        <h1>timezone: {m.timezone}</h1>
                        <h1>type: {m.type}</h1>
                        <h1>------------------------</h1>
                    </div>
                )})
            }
        </div>
     );
}
 
export default Home1