import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";

export default function InfoBox({ info }) {

    const HOT_URL = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=612x612&w=0&k=20&c=wp60t_1SUG9qDTxzAJwvfZYlLVAiu9r737F_nvtOSPA=";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670428635685-dd49306e5622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMFdFQVRIRVIlMjBJTUFHRVN8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/978499462/photo/monsoon-time-people-crossing-a-river-by-boat-in-rain.jpg?s=612x612&w=0&k=20&c=5OOriIjWkOWsLjuH8jRuBfkwMprGGSTPz5YUuSGaOoc=";

    const getImageUrl = (info) => {
        if (info.temp > 15) {
            return HOT_URL;
        } else if (info.humidity < 80) {
            return RAIN_URL;
        } else {
            return COLD_URL;
        }
    };

    const imageUrl = getImageUrl(info);

    return (
        <div className="infoBox">
            <div className='cardcontainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={imageUrl}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <div>
                                <p>Temperature: {info.temp} &deg;C</p>
                                <p>Humidity: {info.humidity} %</p>
                                <p>Min Temperature: {info.tempmin} &deg;C</p>
                                <p>Max Temperature: {info.tempmax} &deg;C</p>
                                <p>The weather can be described and feels like: <i>{info.feelslike}</i> &deg;C</p>
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
