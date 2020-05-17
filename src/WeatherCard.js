import React from "react"

const WeatherCard = (props) => {
    return ( 
        <div className="card">
            <div class="location">
            	<h1 className='city'> Durham</h1>
            	<h3 className="state"> NC</h3>
            </div>
            <img className="icon" src="./img/cloudy.png" alt="Weather Icon"/>
            <h1 className='temp'> 69 °F</h1>
            <h3 className='condition'>Clouds</h3>
        </div>
     );
}
 
export default WeatherCard;