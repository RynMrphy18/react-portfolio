import React from "react";
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// render each project in portfolio

const Project = () => {
    return (
        <section class="App-header">
            <h2 class="section-title secondary-border">My Works</h2>
            <div className="row">
                <div className="col-md-4">
                <a href="https://rynmrphy18.github.io/schedoolie/">
                <img className="resize" src={require("./img/Schedoolie.png")} alt="" />
                </a>

                <a href="https://github.com/RynMrphy18/schedoolie">
                <h3><span>Github Repo</span></h3>
                </a>
                </div>

                <div className="col-md-4">
                <a href= "https://rynmrphy18.github.io/Randy-Passy-Makey/">
                <img className="resize" src={require("./img/Password.png")} alt=""  />
                </a>

                <a href="https://github.com/RynMrphy18/Randy-Passy-Makey">
                <h3><span>Github Repo</span></h3>
                </a>
                </div>

                <div className="col-md-4">
                <a href= "https://rynmrphy18.github.io/taskinator/">
                <img className="resize" src= {require("./img/Taskinator.png")} alt=""  />
                </a>

                <a href="https://github.com/RynMrphy18/taskinator">
                <h3><span>Github Repo</span></h3>
                </a>
                </div>

            </div>

            <div className="row">
                <div className="col-md-4">
                <a href= "https://rynmrphy18.github.io/Weather-Fortune-Teller/">
                <img className="resize" src= {require("./img/WeatherFortune.png")} alt=""  />
                </a>

                <a href="https://github.com/RynMrphy18/Weather-Fortune-Teller">
                <h3><span>Github Repo</span></h3>
                </a>
                </div>

                <div className="col-md-4">
                <a href= "https://powerful-basin-63649.herokuapp.com/">
                <img className="resize" src= {require("./img/vacci-date.png")} alt="" />
                </a>

                <a href="https://github.com/thereeling/vacci-date">
                <h3><span>Github Repo</span></h3>
                </a>
                </div>

                <div className="col-md-4">
                <a href= "https://fomo-exchange.herokuapp.com/">
                <img className="resize" src= {require("./img/fomo.png")} alt="" />

                </a>

                <a href="https://github.com/RynMrphy18/fomo-mock-exchange">
                <h3><span>Github Repo</span></h3>
                </a>
                </div>
            </div>
        </section>
    )
}

export default Project;