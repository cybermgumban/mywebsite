import React from 'react';
import styled from 'styled-components';
import ImageMyPic from '../atoms/Image.mypic/Image.mypic';
import Label from '../atoms/Label/Label.js';
import {Divider} from "../atoms/Divider/Divider";
import IconWrapper from '../organisms/IconWrapper/IconWrapper';
import Icon from '../molecules/Icon/Icon';
import portfolio from '../assets/portfolio.png';
import resume from '../assets/resume.png';
import contact from '../assets/contact.png';

const MainPage = styled.div`
    height: 100%;
    width: 100%;
    @media screen {
        background: -webkit-linear-gradient(to top, #cfa8a1, #800b00);
        background:    -moz-linear-gradient(to top, #cfa8a1, #800b00);
        background:         linear-gradient(to top, #cfa8a1, #800b00);
        position: relative;
        height: 890px;
        width: auto;
    } 
`

const PortfolioPage = styled.div`
    height: 100%;
    width: 100%;
    @media screen {
        background: -webkit-linear-gradient(to left, #b9ff8f, #068500);
        background:    -moz-linear-gradient(to left, #b9ff8f, #068500);
        background:         linear-gradient(to left, #b9ff8f, #068500);
        position: relative;
        height: 890px;
        width: auto;
    } 
`

const ResumePage = styled.div`
    height: 100%;
    width: 100%;
    @media screen {
        background: -webkit-linear-gradient(to right, #c7c2ff, #0d0099);
        background:    -moz-linear-gradient(to right, #c7c2ff, #0d0099);
        background:         linear-gradient(to right, #c7c2ff, #0d0099);
        position: relative;
        height: 890px;
        width: auto;
    } 
`

const ContactPage = styled.div`
    height: 100%;
    width: 100%;
    @media screen {
        background: -webkit-linear-gradient(to bottom, #ffd5df, #b30034);
        background:    -moz-linear-gradient(to bottom, #ffd5df, #b30034);
        background:         linear-gradient(to bottom, #ffd5df, #b30034);
        position: relative;
        height: 890px;
        width: auto;
    } 
`

const Homepage = (props) => {
    return (
        <div>
            <MainPage>
                <ImageMyPic />
                <Label style={{fontSize:40, marginTop: 30}} label={ "Marlon Gumban" }/>
                <Label style={{fontSize:30, marginTop: 15, marginBottom: 30}} label={ "Software Developer" } />
                <Divider />
                <IconWrapper>
                    <Icon imgSrc={portfolio} label={"Portfolio"}/>
                    <Icon imgSrc={resume} label={"Resume"}/>
                    <Icon imgSrc={contact} label={"Contact"}/>
                </IconWrapper>
            </MainPage>
            <PortfolioPage>
            </PortfolioPage>
            <ResumePage>
            </ResumePage>
            <ContactPage>
            </ContactPage>
        </div>
    );
};

export default Homepage;