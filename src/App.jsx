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
                            <Home />
                            <History />
                            <Fixtures />
                            <Experience />
                            <Updates />
                            <Footer />
                        </>
                    } />
                    <Route path="/history" element={<History />} />
                    <Route path="/fixtures" element={<Fixtures />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/updates" element={<Updates />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;