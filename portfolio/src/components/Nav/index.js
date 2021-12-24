import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

// render header and nav component
const Nav = () => {
    return (
        <div>
            <nav className="Nav row">
                <div className="col-md-2">
                    <h1 style={{fontSize: '40px'}}>Ryan Murphy</h1>
                </div>
                <div className="col-md-2">
                    {/* links gives route that app.js will use */}
                    <Link to="/About" style={{textDecoration: 'none', color: '#453f3e'}}>About Me</Link>
                </div>
                <div className="col-md-2">
                    <Link to="/Project" style={{textDecoration: 'none', color: '#453f3e'}}>Projects</Link>
                </div>
                <div className="col-md-2">
                    <Link to="/Contact" style={{textDecoration: 'none', color: '#453f3e'}}>Contact</Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav;