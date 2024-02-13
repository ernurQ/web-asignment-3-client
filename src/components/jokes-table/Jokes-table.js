import useQuoteService from "../../service/use-quote-service";
import {Spinner, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import useChuckNorrisService from "../../service/use-chuck-norris-service";

const JokesTable = ({joke}) => {
    const [data, setData] = useState([])
    const {getHistory, loading} = useChuckNorrisService()

    useEffect(() => {
        getHistory()
            .then(({data}) => setData(data))
    }, [joke]);

    const spinner = loading? <Spinner className={'d-block mx-auto'} /> : null

    return (
        <>
            <Table striped bordered hover className={'mt-5'}>
                <thead>
                <tr>
                    <th>Joke</th>
                    <th>Date</th>
                </tr>
                </thead>

                <tbody>
                {
                    data.map((data) => (
                        <tr key={data._id}>
                            <td>{data.data.joke}</td>
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

export default JokesTable;