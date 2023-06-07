import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "./Home";
import Blog from "./Blog";
import ContactUs from "./ContactUs";
import FAQ from "./FAQ";

function Special(){
    return(
        <div>
            <div>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/blog' element={<Blog/>}/>
                    <Route path='/contact' element={<ContactUs/>}/>
                    <Route path='/faq' element={<FAQ/>}/>
                </Routes>
            </div>
        </div>
    )
}
export default Special;