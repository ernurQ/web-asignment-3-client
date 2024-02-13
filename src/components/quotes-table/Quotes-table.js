import {Spinner, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import useQuoteService from "../../service/use-quote-service";

const QuotesTable = ({quote}) => {
    const [data, setData] = useState([])
    const {getHistory, loading} = useQuoteService()

    useEffect(() => {
        getHistory()
            .then(({data}) => setData(data))
    }, [quote]);

    const spinner = loading? <Spinner className={'d-block mx-auto'} /> : null

    return (
        <>
            <Table striped bordered hover className={'mt-5'}>
                <thead>
                <tr>
                    <th>Quote</th>
                    <th>Author</th>
                    <th>Date</th>
                </tr>
                </thead>

                <tbody>
                {
                    data.map((data) => (
                        <tr key={data._id}>
                            <td>{data.data.quote}</td>
                            <td>{data.data.author}</td>
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

export default QuotesTable;