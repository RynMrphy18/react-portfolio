import React from "react";
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {

    return (

        <section className="App-header">
            <h1>Contact Me</h1>
            <form>
                <div className="row">
                    <label className>Name:</label>
                    <input type="text" name="name"/>
                </div>

                <div className="row">
                    <label>Email:</label>
                    <input type="email" name="email"/>
                </div>

                <div className="row">
                    <label>Message</label>
                    <textarea name="message" rows="5"/>
                </div>
                <button type="submit">Contact</button>
            </form>
        </section>
    )
}

export default Contact;