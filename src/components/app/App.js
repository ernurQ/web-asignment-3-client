import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegisterPage from "../pages/Register-page";
import LoginPage from "../pages/Login-page";
import MainPage from "../pages/Main-page";

function App() {

    return (
        <BrowserRouter basename={'/web-assignment-3-client'}>
            <div className="App">
                <Routes>
                    <Route path={'/login'} element={<LoginPage />} />
                    <Route path={'/register'} element={<RegisterPage />} />
                    <Route path={'/*'} element={<MainPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
