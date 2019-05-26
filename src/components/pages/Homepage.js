import React from 'react';
import MainPage from './MainPage';
import PortfolioPage from './PortfolioPage';
import ResumePage from './ResumePage';

const Homepage = () => {
    return (
        <div>
            <MainPage />
            <PortfolioPage />
            <ResumePage />
        </div>
    )
}

export default Homepage;