import {Form, Formik} from "formik";
import {Form as BootstrapForm, Button, Row, Alert, Spinner} from "react-bootstrap";
import * as yup from "yup";
import FormikTextInput from "../FormikTextInput/Formik-text-input";
import {Link, useNavigate} from "react-router-dom";
import useAuthService from "../../service/use-auth-service";

const RegisterForm = () => {
    const {register, error, loading} = useAuthService()
    const navigate = useNavigate();

    const onSubmit = (values) => {
        const {email, password, username} = values;
        register(email, password, username)
            .then(() => {
                navigate('/login')
            })
            .catch((e) => true)
    }

    const errorMessage = error? <Alert className={'text-center mt-3'} variant={'warning'}>{error}</Alert> : null;
    const spinner = loading? <Spinner className={'d-block mx-auto'} /> : null

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                    username: '',
                }}
                validationSchema={yup.object({
                    email: yup.string().email().required('Email is required'),
                    password: yup.string()
                        .required('Password is required')
                        .min(3, 'Password must be at least 3 characters'),
                    confirmPassword: yup.string()
                        .oneOf([yup.ref('password')], 'Passwords does not match'),
                    username: yup.string().required('Username is required')
                })}
                onSubmit={onSubmit}
            >
                <Form
                    as={BootstrapForm}
                >
                    <FormikTextInput
                        label={'Enter email'}
                        type={'email'}
                        name={'email'}
                    />
                    <FormikTextInput
                        label={'Enter password'}
                        type={'password'}
                        name={'password'}
                    />
                    <FormikTextInput
                        label={'Confirm Password'}
                        type={'password'}
                        name={'confirmPassword'}
                        placeholder={'confirm password'}
                    />
                    <FormikTextInput
                        label={'Enter username'}
                        type={'text'}
                        name={'username'}
                    />


                    <Row className={'mt-4'}>
                        <Button variant="info" type={'submit'} className={'offset-sm-1 col-sm-3'}>Register</Button>

                        <BootstrapForm.Text className={'offset-sm-1 col-sm-5'}>
                            Already have an account?
                            <Link to="/" className={'ms-2'}>Login</Link>
                        </BootstrapForm.Text>
                    </Row>
                </Form>
            </Formik>

            {errorMessage}
            {spinner}
        </>
    )
}

export default RegisterForm;