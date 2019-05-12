import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    height: 90px;
    width: 90px;
    border-radius: 50%;
    border: 1.2px solid black;
    opacity: 0.8;
    box-shadow: 0px 5px 10px grey;
`

const ImageWrapper = styled.img`
    height: 50px;
    width: 50px;
`

const RoundButton = (props) => {
    return (
        <ButtonWrapper>
            <ImageWrapper src={props.imgSrc}/>
        </ButtonWrapper>
    );
};

export default RoundButton;