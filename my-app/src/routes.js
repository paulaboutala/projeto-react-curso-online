import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Login from "./pages/Login";

function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/cursos" element={ <Cursos/> }></Route>
                <Route path="/login" element={ <Login/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;