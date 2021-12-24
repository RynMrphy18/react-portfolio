import React from "react";
import '../../App.css';

// renders footer element and each logo with clickable link
const Footer = () => {

    return (
        <section className='Nav'>
            <a href="https://github.com/RynMrphy18">
                <img src={require('./img/github.png')} className="resize2"/>
            </a>
            
            <a href="https://www.linkedin.com/feed/">
            <img src={require('./img/linkedin.png')} className="resize2"/>
            </a>

            <a href="https://twitter.com/home">
            <img src={require('./img/twitter.png')} className="resize2"/>
            </a>
        </section>
    )
}

export default Footer;