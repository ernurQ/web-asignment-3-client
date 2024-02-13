import {Route, Routes, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import useAuthService from "../../service/use-auth-service";
import Navbar from "../navbar/Navbar";
import WeatherPage from "./Weather-page";
import QuotePage from "./Quote-page";
import JokePage from "./Joke-page";
import {Spinner} from "react-bootstrap";
import AdminPage from "./Admin-page";

const MainPage = () => {
    const [isAdmin, setIsAdmin] = useState(false)
    const {checkAuth, loading} = useAuthService()
    const navigate = useNavigate();


    useEffect(() => {
        checkAuth()
            .then(({data: {user: {role}}}) => {
                if (role === 'admin') {
                    setIsAdmin(true)
                }
            })
            .catch(() => navigate('/login'));

    }, []);

    const content = loading ? <Spinner className={'d-block mx-auto mt-5'} /> : <View isAdmin={isAdmin} />

    return (
        <>
            {content}
        </>
    )
}

const View = ({isAdmin}) => (
    <>
        <Navbar isAdmin={isAdmin} />
        <Routes>
            <Route path={'weather'} element={<WeatherPage />} />
            <Route path={'quote'} element={<QuotePage />} />
            <Route path={'chuck-norris'} element={<JokePage />} />
            <Route path={'admin-page'} element={<AdminPage />} />
        </Routes>
    </>
)

export default MainPage