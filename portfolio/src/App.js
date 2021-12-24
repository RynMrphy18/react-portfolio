import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../src/components/Nav';
import Project from '../src/components/Project';
import Contact from '../src/components/Contact';
import About from '../src/components/About';
import Footer from "../src/components/Footer";

// launches app
function App() {
  return (
    // router encompasses all routes
    // items in Routes will condition if theyre path is called
    // nav and footer lies outside routes so they always render
    <Router>
    <Nav />
    <Routes>
    <Route exact path ="/" element={< About/>}/>
    <Route exact path= "/About" element={<About />}/>
    <Route exact path="/Project" element={<Project />}/>
    <Route exact path ="/Contact" element={<Contact />}/>
    </Routes>
    <Footer />
    </Router>
  );
}

export default App;
