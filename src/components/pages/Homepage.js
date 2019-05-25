import React from 'react';
import styled from 'styled-components';

//components
import Icons from '../organisms/Icons/Icons';

const MainPageWrapper = styled.div`
    background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(7, 1fr);

    .Label1 {
        grid-area: 3/3/4/6;
    }

    .Label2 {
        grid-area: 4/5/5/8;
    }

    .AboutMe {
        grid-area: 5/3/7/8;
    }

    & > div > h1 {
        border: 1px solid #D3D3D3;
        text-align: center;
        height: 5vh;
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
        grid-row: 1/3;
        align-self: center;
    }
`

const Homepage = () => {
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
                        I am an upcoming Rockstar Software Developer that can take care of your Web and Mobile Application needs.
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
            </GridWrapper>
        </MainPageWrapper>
    )
}

export default Homepage;