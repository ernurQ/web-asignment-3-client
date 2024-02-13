import {Container} from "react-bootstrap";
import LoginForm from "../login-form/Login-form";

const LoginPage = () => {
    return (
        <Container className={'py-5'}>
            <div className={'offset-3 col-6'}>
                <LoginForm />
            </div>
        </Container>
    )
}

export default LoginPage