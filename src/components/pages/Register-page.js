import RegisterForm from "../register-form/Register-form";
import {Container} from "react-bootstrap";

const RegisterPage = () => {
    return (
        <Container className={'py-5'}>
            <div className={'offset-3 col-6'}>
                <RegisterForm />
            </div>
        </Container>
    )
}

export default RegisterPage