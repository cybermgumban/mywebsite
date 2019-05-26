import React from 'react';
import styled from 'styled-components';

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

const ResumePageWrapper = styled.div`
    background-image: linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%);

    & > h1 {
        text-align: center;
        margin: 0;
        padding: 20px;
    }
`

const ResumePage = () => {
    return (
        <ResumePageWrapper>
            <h1>Resume</h1>
            <InsideWrapper>
                <img className="Image1" src="http://lorempixel.com/310/800" alt="image1"/>
                <img className="Image2" src="http://lorempixel.com/310/800" alt="image2"/>
            </InsideWrapper>
        </ResumePageWrapper>
    )
}

export default ResumePage;