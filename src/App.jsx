import React from 'react';
import Navbar from './layouts/Navbar';
import Home from './components/Home';
import History from './components/History';
import Fixtures from './components/Fixtures';
import Experience from './components/Experience';
import Updates from './components/Updates';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Experience />
            <Fixtures />
            <History />
            <Updates />
            <Footer />
        </div>
    );
}

export default App;