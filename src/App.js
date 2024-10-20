import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import FindUs from './pages/FindUs';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <nav className="navbar">
                        <div className="logo-container">
                            <Link to="/">
                                <div className="logo">kwiaciarniaJadwigaNowak</div>
                            </Link>
                        </div>
                        <ul className="nav-links">
                            <li><Link to="/find-us">Jak nas znaleźć?</Link></li>
                            <li><Link to="/contact">Kontakt</Link></li>
                        </ul>
                    </nav>
                </header>
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/find-us" element={<FindUs/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
