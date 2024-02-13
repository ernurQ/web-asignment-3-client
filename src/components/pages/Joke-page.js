import {Container, Spinner} from "react-bootstrap";
import {useState} from "react";
import useChuckNorrisService from "../../service/use-chuck-norris-service";
import JokesTable from "../jokes-table/Jokes-table";

const JokePage = () => {
    const [joke, setJoke] = useState('joke')
    const {getJoke, loading} = useChuckNorrisService()

    const onClick = (e) => {
        e.preventDefault();
        getJoke()
            .then(({data: {joke}}) => setJoke(joke))
    }

    const spinner = loading? <Spinner className={'d-block mx-auto'} /> : null

    return (
        <Container className={'py-5'}>
            <h1 className="text-center mb-4">Chuck Norris jokes Api</h1>

            <div className="row">
                <button onClick={onClick} type="button" className="btn btn-primary offset-5 col-2">get joke</button>
            </div>

            <div style={{whiteSpace: 'pre-wrap'}} className="alert alert-light text-center mt-5 offset-3 col-6"
            >
                {spinner}
                {joke}
            </div>

            <JokesTable joke={joke} />
        </Container>
    )
}

export default JokePage;