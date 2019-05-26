import React from 'react';
import styled from 'styled-components';

//components
import PortfolioItem from '../organisms/PortfolioItem/PortfolioItem';

const FIXTURES = {
    input: [
        {
            image: "http://lorempixel.com/300/300",
            title: "My website - www.cybermgumban.com",
            type: "Web Application",
            description: "A website that showcase my portfolio, resume and a way to contact me.",
            modules: [ "React", "Styled-Components", "CSS Grid" ]
        },
        {
            image: "http://lorempixel.com/300/300",
            title: "Fitbook",
            type: "Web Application",
            description: "A social platform for people that are into fitness.",
            modules: [ "React", "Styled-Components", "CSS Grid" ]
        },

        {
            image: "http://lorempixel.com/300/300",
            title: "Fitbook",
            type: "Mobile Application",
            description: "A mobile app social platform for people that are into fitness.",
            modules: [ "React-Native", "Styled-Components", "CSS Grid" ]
        }
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
        <PortfolioPageWrapper>
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