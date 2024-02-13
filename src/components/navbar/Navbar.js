import {Button, Container, Nav, Navbar as BootstrapNavbar, Offcanvas} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import useAuthService from "../../service/use-auth-service";

const Navbar = ({isAdmin}) => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const {logout} = useAuthService()
    const navigate = useNavigate();

    const handleClose = () => setShowOffcanvas(false);
    const handleShow = () => setShowOffcanvas(true);

    const onLogout = () => {
        logout()
            .then(() => navigate('/login'))
    }

    return (
        <>
            <BootstrapNavbar className="bg-body-tertiary">
                <Container>
                    <Nav className="w-100 justify-content-around">
                        <Nav.Link
                            as={Link}
                            to={'/weather'}
                        >
                            Weather
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to={'/Quote'}
                        >
                            Quote
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to={'/chuck-norris'}
                        >
                            Chuck Norris
                        </Nav.Link>

                        <Nav.Item>
                            <Button
                                onClick={handleShow}
                                className={'nav-link'}
                                style={{backgroundColor: 'transparent'}}
                                variant={'light'}
                            >
                                Profile
                            </Button>
                        </Nav.Item>

                    </Nav>
                </Container>
            </BootstrapNavbar>

            <Offcanvas show={showOffcanvas} onHide={handleClose} placement={'end'}>

                <Offcanvas.Header closeButton>
                </Offcanvas.Header>

                <Offcanvas.Body className={'px-3'}>
                    {
                        isAdmin?
                            (
                                <Nav.Link
                                    as={Link}
                                    to={'admin-page'}
                                    variant={'link'}
                                >
                                    Admin page
                                </Nav.Link>
                            ) : null
                    }
                    <Button
                        onClick={onLogout}
                        className={'nav-link mt-2'}
                        style={{backgroundColor: 'transparent'}}
                        variant={'light'}
                    >
                        Logout
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Navbar;