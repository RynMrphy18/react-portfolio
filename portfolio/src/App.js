import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../src/components/Nav';
import Project from '../src/components/Project';
import Contact from '../src/components/Contact';
import About from '../src/components/About';
import Footer from "../src/components/Footer";

function App() {
  return (
    <Router>
    <Nav />
    <Routes>
    <Route exact path= "/About" element={About}/>
    <Route exact path="/Project" element={Project}/>
    <Route exact path ="/Contact" element={Contact}/>
    <Route exact path="/Footer" element={Footer}/>
    </Routes>
    </Router>
  );
}

export default App;
