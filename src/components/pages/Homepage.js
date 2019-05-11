import React from 'react';
import styled from 'styled-components';
import ImageMyPic from '../atoms/Image.mypic/Image.mypic';
import Label from '../atoms/Label/Label.js'
import IconWrapper from '../organisms/IconWrapper/IconWrapper'
import Icon from '../molecules/Icon/Icon'
import portfolio from '../assets/portfolio.png';
import resume from '../assets/resume.png';
import contact from '../assets/contact.png';

const Wrapper = styled.div`
    position: relative;
    background-image: url("../assets/whitebackground.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: inherit;
    width: inherit;
`

const Homepage = (props) => {
    return (
        <Wrapper>
            <ImageMyPic />
            <Label style={{fontSize:40, marginTop: 30}} label={ "Marlon Gumban" } />
            <Label style={{fontSize:30, marginTop: 15, marginBottom: 30}} label={ "Junior Front-End Software Developer" } />
            <IconWrapper>
                <Icon imgSrc={portfolio} label={"Portfolio"}/>
                <Icon imgSrc={resume} label={"Resume"}/>
                <Icon imgSrc={contact} label={"Contact"}/>
            </IconWrapper>
        </Wrapper>
    );
};

export default Homepage;