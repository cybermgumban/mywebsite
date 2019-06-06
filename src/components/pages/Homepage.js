import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//components
import MainPage from './MainPage';
import PortfolioPage from './PortfolioPage';
import ResumePage from './ResumePage';
import ContactPage from './ContactPage';

const Homepage = () => {
    return (
        <Router>
            <div>
                <Route to="/"><MainPage /></Route>
                <Route to="/portfolio"><PortfolioPage /></Route>
                <Route to="/resume"><ResumePage /></Route>
                <Route to="/contact"><ContactPage /></Route>
            </div>
        </Router>
    )
}

export default Homepage;