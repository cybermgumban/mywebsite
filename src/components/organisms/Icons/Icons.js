import React from 'react';
import styled from 'styled-components';

//components
import Icon from '../../molecules/Icon/Icon';

//assets
import portfolio from '../../assets/portfolio.png'
import resume from '../../assets/resume.png'
import contact from '../../assets/contact.png'

const IconWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Icons = (props) => {
    return (
        <IconWrapper>
            <Icon label={"Portfolio"} imgSrc={portfolio}/>
            <Icon label={"Resume"} imgSrc={resume}/>
            <Icon label={"Contact Me"} imgSrc={contact}/>
        </IconWrapper>
    )
}

export default Icons;