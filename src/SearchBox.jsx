import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateinfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(""); // State to hold error message

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "76c1e32b0fc8d925342d64c54ac8d6a8";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

            if (!response.ok) {
                throw new Error("City not found");
            }

            const jsonResponse = await response.json();
            console.log(jsonResponse);
            const result = {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                tempmin: jsonResponse.main.temp_min,
                tempmax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (error) {
            setError("No such place exits !");
            throw error; // Re-throw the error to handle it in handleSubmit
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
        setError(""); // Clear error when user types a new city
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        try {
            const info = await getWeatherInfo();
            updateinfo(info);  // Use the correctly defined variable 'info'
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="SearchBox">
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
            </form>
            {error && (
                <p style={{ color: "red" }}>{error}</p> // Display error message in red text
            )}
        </div>
    );
}
