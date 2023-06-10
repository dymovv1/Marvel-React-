import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Characters from "../pages/Characters.jsx";
import path from "./path";
import Layout from "../components/Layout/index.jsx";

//<HashRouter basename="/">  вместо BrowserRouter
function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home/>}/>
                    <Route path={path.about} element={<About />} />
                    <Route path={path.characters} element={<Characters />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;