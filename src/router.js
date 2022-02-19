import React from "react";
import { Routes, Route } from "react-router";
import Experience from "./pages/experience";

const RouteCurriculo = () =>{
    return(
        <Routes>
            <Route exact path="/" element={<Experience/>}/>
        </Routes>
    );
}

export default RouteCurriculo;