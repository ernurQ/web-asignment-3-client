import {Container, Spinner} from "react-bootstrap";
import {useState} from "react";
import useWeatherApiService from "../../service/use-weather-api-service";
import WeathersTable from "../weathers-table/Weathers-table";

const WeatherPage = () => {
    const [city, setCity] = useState('')
    const [data, setData] = useState(null)
    const {getWeather, loading} = useWeatherApiService()

    const onSubmit = (e) => {
        e.preventDefault()
        setData(null)
        getWeather(city)
            .then(({data}) => setData(data))
            .catch(e => alert('city not found'))
    }

    const spinner = loading? <Spinner className={'d-block mx-auto'} /> : null
    const content = data? <ResultView data={data} /> : null

    return (
        <Container className={'py-5'}>
            <h1 className="text-center mb-4">Weather Api</h1>
            <form
                onSubmit={onSubmit}
                className="offset-2 col-8 offset-md-3 col-md-6 offset-lg-4 col-lg-4">
                <div className="input-group w-100">
                    <div className="form-outline col">
                        <label className="form-label" htmlFor="form1" hidden></label>
                        <input
                            onInput={e => setCity(e.target.value)}
                            value={city}
                            type="search"
                            name="city"
                            className="form-control text-center"
                            placeholder="City"/>
                    </div>
                    <button type="submit" className="btn btn-primary d-flex justify-content-center align-items-center">
                        submit
                    </button>
                </div>
            </form>

            <div className={'offset-3 col-6 mt-3'}>
                {spinner}
                {content}
            </div>

            <WeathersTable weather={data} />

        </Container>
    )
}

const ResultView = ({data}) => {
    const {temp, feels_like, description, humidity, pressure, wind_speed, icon, country_code} = data

    return (
        <div id="data" className="offset-1 col-4 text-left pt-2">
            <div className="card-body">
                <p id="temperature" className="card-text">Temperature: {temp}</p>
                <p id="feels-like" className="card-text">Feels Like: {feels_like}</p>
                <p id="description" className="card-text">Description: {description}</p>
                <p id="humidity" className="card-text">Humidity: {humidity}</p>
                <p id="wind-speed" className="card-text">Wind Speed: {wind_speed}</p>
                <p id="pressure" className="card-text">Pressure: {pressure}</p>
                <p id="countryCode" className="card-text">Country code: {country_code}</p>
                <p id="icon" className="card-text">Icon: {icon}</p>
            </div>
        </div>
    )
}

export default WeatherPage