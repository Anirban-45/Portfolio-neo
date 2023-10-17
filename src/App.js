import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import './styles/App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import Work from './screens/Work'
import Beditor from './screens/Projects/Beditor'
import Jatayat from './screens/Projects/Jatayat'
import Medibee from './screens/Projects/Medibee'

import Contact from './screens/Contact'

function App() {

    const location = window.location.pathname
    const footerStyler = () => {
        if (location.startsWith('/work/')) {
            return {
                display: 'none'
            }
        }
        else {
            return {
                display: 'block'
            }
        }
    }
    return (

            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/Portfolio" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/work" element={<Work/>} />
                    <Route path="/contact" element={<Contact/>} />

                    <Route path="/work/beditor" element={<Beditor/>} />
                    <Route path="/work/jatayat" element={<Jatayat/>} />
                    <Route path="/work/medibee" element={<Medibee/>} />
                </Routes>
                <Footer/>
            </Router>

    );
}

export default App;
