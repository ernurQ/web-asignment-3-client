import {Form, Formik} from "formik";
import FormikTextInput from "../FormikTextInput/Formik-text-input";
import {Alert, Button, Form as BootstrapForm, Row, Spinner} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import useAuthService from "../../service/use-auth-service";

const LoginForm = props => {
    const {login, error, loading} = useAuthService()
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const {email, password} = values;
        login(email, password)
            .then(() => {
                navigate('/')
            })
            .catch(e => true)
    }

    const errorMessage = error? <Alert className={'text-center mt-3'} variant={'warning'}>{error}</Alert> : null;
    const spinner = loading? <Spinner className={'d-block mx-auto'} /> : null



    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={onSubmit}
            >
                <Form>
                    <FormikTextInput
                        label="Enter email"
                        name="email"
                        type="email"
                    />
                    <FormikTextInput
                        label="Enter password"
                        name="password"
                        type="password"
                    />

                    <Row className={'mt-4'}>
                        <Button variant="info" type={'submit'} className={'offset-sm-1 col-sm-3'}>Login</Button>

                        <BootstrapForm.Text className={'offset-sm-1 col-sm-5'}>
                            Don't have an account?'
                            <Link to="/register" className={'ms-2'}>Register</Link>
                        </BootstrapForm.Text>
                    </Row>
                </Form>
            </Formik>

            {errorMessage}
            {spinner}
        </>
    )
}

export default LoginForm;