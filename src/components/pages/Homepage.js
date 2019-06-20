import React from 'react';

//components
import MainPage from './MainPage';
import PortfolioPage from './PortfolioPage';
import ResumePage from './ResumePage';
import ContactPage from './ContactPage';

const Homepage = () => {
    return (
        <div>
            <MainPage />
            <PortfolioPage />
            <ResumePage />
            <ContactPage />
        </div>
    )
}

export default Homepage;