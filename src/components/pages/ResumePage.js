import React from 'react';
import styled from 'styled-components';

const FIXTURES = [
    {
        type: "Software Development",
        skills: [
            "ReactJS", "CSS Grid", "Styled-Components"
        ]
    },
    {
        type: "Network and Voice over IP Engineer",
        skills: [
            "Cisco Router and Switches", "Cisco/Fortinet Firewall", "CUCM, IMP, CUC, Expressway Servers", "PSTN", "IP Phones"
        ]
    }
]

const ResumePageWrapper = styled.div`
    background-image: linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%);

    & > h1 {
        text-align: center;
        margin: 0;
        padding: 20px;
    }
`

const InsideWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

    .Image1 {
        grid-column: 1;
        justify-self: start;
    }

    .Image2 {
        grid-column: 3;
        justify-self: end;
    }
`

const ContentWrapper = styled.div`
    grid-column: 2;
    grid-row: 1;
    text-align: center;
    margin: 0 40px;

    & > div {
        text-align: left;
        margin: 50px 0;
    }
`

const ResumePage = () => {
    return (
        <ResumePageWrapper id="resume">
            <h1>Resume</h1>
            <InsideWrapper>
                <img className="Image1" src="http://lorempixel.com/310/800" alt="image1"/>
                <img className="Image2" src="http://lorempixel.com/310/800" alt="image2"/>
                <ContentWrapper>
                    <h2>Marlon Gumban</h2>
                    <h3>Software Developer</h3>
                    {FIXTURES.map((details, index) => (
                        <div key={index}>
                            <p>Current Field: {details.type}</p>
                            <p>Skills:</p>
                            <ul key={index}>
                                {details.skills.map((detail) => (
                                    <li>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </ContentWrapper>
            </InsideWrapper>
        </ResumePageWrapper>
    )
}

export default ResumePage;