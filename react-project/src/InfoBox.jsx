import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css"


export default function InfoBOx({info}){
     const INIT_URL ="https://images.unsplash.com/photo-1528844573475-9240ba9c0f5c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
     const HOT_URL ="/sun.jpg";
     const  COLD_URL ="/cold.jpg";
     const  RAINY_URL ="/rain.jpg";

    // let info ={
    //          city: "Delhi",
    //          feelslike :24.84,
    //          temp: 25.05,
    //          tempMin :25.10,
    //          tempMax:25.05,
    //            humidity:47,
    //          weather: "haze",
    // }
    
    return(
        <div className="Box">
            {/* <h1>WeatherInfo -{info.weather}</h1> */}
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={
          info.humidity > 80 ? RAINY_URL : info.temp > 15? HOT_URL : COLD_URL
        }
        // component="img"
        // height="194"
        // image= "src/assets/sun.jpg"
        // alt="Paella dish"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
          info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temprature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    )
}