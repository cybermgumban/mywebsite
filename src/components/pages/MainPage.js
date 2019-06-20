import React from 'react';
import styled from 'styled-components';
import {BREAKPOINTS} from '../_core/breakpoints'

//components
import Icons from '../organisms/Icons/Icons';
import Linkedin from '../assets/linkedin.png';
import Twitter from '../assets/twitter.png';

const MainPageWrapper = styled.div`
    background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
`

const SocialWrapper = styled.div`
    display: flex;
    flex-direction: row;
    
    & > a,img {
        margin: 0 10px;
        height: 50px;
        width: 50px;
    }
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(6, 1fr);
    
    .Label1 {
        grid-area: 2/3/3/8;
        align-self: center;
    }
    .Label2 {
        grid-area: 3/3/4/8;
        align-self: center;
    }
    .AboutMe {
        grid-area: 4/3/6/8;
    }
    & > div > h1 {
        border: 1px solid #D3D3D3;
        text-align: center;
        height: 40px;
        margin: 0;
        padding: 0;
    }
    .name {
        background-image: linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);
        background-blend-mode: normal, lighten, soft-light;
    }
    .profession {
        background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
        color: white;
    }
    & > div > h2 {
        text-align: center;
    }
    & > div > p {
        text-align: center;
        letter-spacing: 2px;
    }
    .iconwrapper {
        grid-column: 1/-1;
        grid-row: 1/2;
        align-self: end;
    }
    .social {
        grid-column: 5/6;
        grid-row: 6/7;
        justify-content: center;
        margin: auto;
    }

    @media (min-width: ${BREAKPOINTS.SMALL}) {
    grid-template-rows: repeat(6, 1fr) 40px;
        .Label1 {
            grid-area: 2/3/3/6;
            align-self: end;
        }
        .Label2 {
            grid-area: 3/5/4/8;
        }
    }
`

const MainPage = () => {
    return (
        <MainPageWrapper>
            <GridWrapper>
                <div className="iconwrapper">
                    <Icons />
                </div>
                <div className="Label1">
                    <h1 className="name">MARLON</h1>
                    <h1 className="name">GUMBAN</h1>
                </div>
                <div className="Label2">
                    <h1 className="profession">SOFTWARE</h1>
                    <h1 className="profession">DEVELOPER</h1>
                </div>
                <div className="AboutMe">
                    <h2>About Me</h2>
                    <p>
                        I'm an upcoming Rockstar Software Developer that can take care of your Web Application needs.
                    </p>
                    <p>
                        Riding the waves of life with Passion and Perseverance, there is no obstacle we cannot overcome.
                    </p>
                    <p>
                        Let's become business partners. 
                    </p>
                    <p>
                        Let's grow together. 
                    </p>
                    <p>
                        I'm a single click away!
                    </p>
                    <p>
                        Contact Me.
                    </p>
                </div>
                <SocialWrapper className="social">
                    <a href="https://www.linkedin.com/in/marlongumban/"><img src={Linkedin} alt="linkedin"/></a>
                    <a href="https://twitter.com/cybermgumban"><img src={Twitter} alt="twitter"/></a>
                </SocialWrapper>
            </GridWrapper>
        </MainPageWrapper>
    )
}

export default MainPage;