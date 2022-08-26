import React from "react";
import {FaHome} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header(){
    return (
       <div className="header-bar">
            <Link to="/"><FaHome className="icon-home" /></Link>
        </div>
    )
}