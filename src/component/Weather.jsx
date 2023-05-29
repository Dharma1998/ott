
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Weather = () => {

    let[city, setCity] = useState(null);
    let {placeid} = useParams();

    useEffect(() => {
        const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=fishermans%20wharf&language=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
        };

        fetch(url,options)
        .then((res)=>{return res.json()})
        .then((data)=>{setCity(data)})
    }, [])

    return (
        <div>
            <h1>weather details of search city</h1>
            {city && 
            <div>
                <h1></h1>
            </div>
            }
        </div>
    );
}

export default Weather


