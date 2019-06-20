import React from 'react';
import styled from 'styled-components';

//components
import Icon from '../../molecules/Icon/Icon';
import Logo from '../../atoms/Logo/Logo';

//assets
import portfolio from '../../assets/portfolio.png'
import resume from '../../assets/resume.png'
import contact from '../../assets/contact.png'

const IconsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const LogoWrapper = styled.div`
    align-self: center;
`

const IconWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Icons = (props) => {
    return (
        <IconsWrapper>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>         
            <IconWrapper>
                <a href="#portfolio"><Icon label={"Portfolio"} imgSrc={portfolio}/></a>
                <a href="#resume"><Icon label={"Resume"} imgSrc={resume}/></a>
                <a href="#contact"><Icon label={"Contact Me"} imgSrc={contact}/></a>
            </IconWrapper>
        </IconsWrapper>
    )
}

export default Icons;