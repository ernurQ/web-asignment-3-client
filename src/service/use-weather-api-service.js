import useHttp from "../hooks/use-http-hook";

const useWeatherApiService = () => {
    const {request, ...httpSates} = useHttp()

    const getWeather = async (city) => {
        const options ={
            method: 'GET',
            url: `/external-apis/weather?city=${city}`,
        }
        return request(options)
    }

    const getHistory = async () => {
        const options ={
            method: 'GET',
            url: `/external-apis/weather/history`
        }
        return request(options)
    }

    return {
        ...httpSates,
        getWeather,
        getHistory,
    }
}

export default useWeatherApiService