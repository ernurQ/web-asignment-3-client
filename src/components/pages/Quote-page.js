import {Container, Spinner} from "react-bootstrap";
import {useState} from "react";
import useQuoteService from "../../service/use-quote-service";
import QuotesTable from "../quotes-table/Quotes-table";

const QuotePage = () => {
    const [data, setData] = useState('quote')
    const {getQuote, loading} = useQuoteService()

    const onClick = (e) => {
        e.preventDefault();
        getQuote()
            .then(({data}) => setData(`${data.quote}\nAuthor: ${data.author}`))
    }

    const spinner = loading? <Spinner className={'d-block mx-auto'} /> : null

    return (
        <Container className={'py-5'}>
            <h1 className="text-center mb-4">Quotes Api</h1>

            <div onClick={onClick} className="row">
                <button type="button" className="btn btn-primary offset-5 col-2">get quote</button>
            </div>

            <div
                style={{whiteSpace: 'pre-wrap'}}
                className="alert alert-light text-center mt-5 offset-3 col-6"
            >
                {spinner}
                {data}
            </div>

            <QuotesTable quote={data} />
        </Container>
    )
}

export default QuotePage