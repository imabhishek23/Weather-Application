import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
    
    const [weatherinfo, setWeatherinfo] = useState({
        city: "Wonderland",
        feelslike: 24.84,
        temp: 25.05,
        tempmin: 25.05,
        tempmax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    const updateinfo = (newinfo) => {
        setWeatherinfo(newinfo);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <SearchBox updateinfo={updateinfo}></SearchBox>
            <InfoBox info={weatherinfo}></InfoBox>
        </div>
    );
}
