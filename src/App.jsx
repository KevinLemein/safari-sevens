import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './layouts/Navbar';

import Home from './components/Home';
import History from './components/History';
import Fixtures from './components/Fixtures';
import Experience from './components/Experience';
import Updates from './components/Updates';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                        <div id="home"><Home /></div>
                        <div id="history"><History /></div>
                        <div id="fixtures"><Fixtures /></div>
                        <div id="experience"><Experience /></div>
                        <div id="updates"><Updates /></div>
                        <Footer />
                        </>
                    }/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;