import React from 'react';
import styled from 'styled-components';
import ImageMyPic from '../atoms/Image.mypic/Image.mypic';
import Label from '../atoms/Label/Label.js';
import {Divider} from "../atoms/Divider/Divider";
import IconWrapper from '../organisms/IconWrapper/IconWrapper';
import Icon from '../molecules/Icon/Icon';
import whitebackground from "../assets/whitebackground2.jpg";
import portfolio from '../assets/portfolio.png';
import resume from '../assets/resume.png';
import contact from '../assets/contact.png';
import Footer from '../atoms/Footer/Footer'

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    @media screen {
        background-image: url(${whitebackground});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    } 
`
const Homepage = (props) => {
    return (
        <Wrapper>
            <ImageMyPic />
            <Label style={{fontSize:40, marginTop: 30}} label={ "Marlon Gumban" }/>
            <Label style={{fontSize:30, marginTop: 15, marginBottom: 30}} label={ "Software Developer" } />
            <Divider />
            <IconWrapper>
                <Icon imgSrc={portfolio} label={"Portfolio"}/>
                <Icon imgSrc={resume} label={"Resume"}/>
                <Icon imgSrc={contact} label={"Contact"}/>
            </IconWrapper>
            <Footer />
        </Wrapper>
    );
};

export default Homepage;