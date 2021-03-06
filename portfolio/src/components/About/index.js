import React from "react";
import '../../App.css';

// renders about section

const About = () => {
    return (
        <section className="App-header">

            <img src={require('./ProfilePicture.png')}/>

            <h2>About Me</h2>
            <p>I've recently moved back from South Korea after spending three years there experiencing the culture, learning the language, and teaching English to children. Now, I've decided to learn how to build websites and code. When I'm not coding I'm usually weightlifting, playing guitar or watching movies. I also really like sandwiches.</p>
        </section>
    )
}

export default About;