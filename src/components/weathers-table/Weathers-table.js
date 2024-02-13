import {useEffect, useState} from "react";
import {Spinner, Table} from "react-bootstrap";
import useWeatherApiService from "../../service/use-weather-api-service";

const WeathersTable = ({weather}) => {
    const [data, setData] = useState([])
    const {getHistory, loading} = useWeatherApiService()

    useEffect(() => {
        getHistory()
            .then(({data}) => setData(data))
    }, [weather]);

    const spinner = loading? <Spinner className={'d-block mx-auto'} /> : null

    return (
        <>
            <Table striped bordered hover className={'mt-5'}>
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temp</th>
                    <th>Description</th>
                    <th>feels_like</th>
                    <th>Date</th>
                </tr>
                </thead>

                <tbody>
                {
                    data.map((data) => (
                        <tr key={data._id}>
                            <td>{data.city}</td>
                            <td>{data.data.temp}</td>
                            <td>{data.data.description}</td>
                            <td>{data.data.feels_like}</td>
                            <td style={{width: '8%'}}>{data.date.substring(0, 10)}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
            {spinner}
        </>
    )
}

export default WeathersTable;