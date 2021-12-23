import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";

function nav() {
    return (
        <div>
            <nav>
                <div>
                    <Link to="/About">About Me</Link>
                </div>
                <div>
                    <Link to="/Project">Projects</Link>
                </div>
                <div>
                    <Link to="/Contact">Contact</Link>
                </div>
            </nav>
        </div>
    )
}

export default nav;