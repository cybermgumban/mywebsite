import React from 'react';
import styled from 'styled-components';

//components
import PortfolioItem from '../organisms/PortfolioItem/PortfolioItem';
import fitbook from '../assets/fitbook.PNG';
import mywebsite from '../assets/mywebsite.PNG';

const FIXTURES = {
    input: [
        {
            image: `${mywebsite}`,
            title: "My website - www.cybermgumban.com",
            type: "Web Application",
            description: "A website that showcase my portfolio's, resume and a way to contact me.",
            modules: [ "ReactJS", "Styled-Components", "CSS Grid/Flex" ]
        },
        {
            image: `${fitbook}`,
            title: "Fitbook - cybermgumban.github.io",
            type: "Web Application",
            description: "A social platform for people that are into fitness.",
            modules: [ "ReactJS", "Styled-Components", "CSS Grid/Flex", "Apollo", "Heroku deployed - GraphQL", "mLab/mongoDB Atlas" ]
        },
    ]
}

const PortfolioPageWrapper = styled.div`
    background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);

    & > h1 {
        text-align: center;
        margin: 0;
        padding: 20px;
    }
`

const PortfolioPage = () => {
    return (
        <PortfolioPageWrapper id="portfolio">
            <h1>Portfolio</h1>
            {FIXTURES.input.map((inputs, index) => (
                <PortfolioItem 
                    key={index} 
                    imgSrc={inputs.image} 
                    title={inputs.title} 
                    type={inputs.type} 
                    description={inputs.description} 
                    modules={inputs.modules}
                />
            ))}
        </PortfolioPageWrapper>
    )
}

export default PortfolioPage;