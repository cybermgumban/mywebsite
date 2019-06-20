import React from 'react';
import styled from 'styled-components';
import {BREAKPOINTS} from '../../_core/breakpoints'

const ButtonWrapper = styled.button`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    opacity: 1;
    outline : none;
    margin: 0 15px;
    background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
    @media (min-width: ${BREAKPOINTS.SMALL}) {
        margin: 0 20px;
    }

    &:hover{
        background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);
    }
`

const ImageWrapper = styled.img`
    height: 40px;
    width: 40px;
`

const RoundButton = (props) => {
    return (
        <ButtonWrapper>
            <ImageWrapper src={props.imgSrc}/>
        </ButtonWrapper>
    );
};

export default RoundButton;