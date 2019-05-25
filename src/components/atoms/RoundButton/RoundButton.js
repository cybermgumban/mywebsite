import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    height: 70px;
    width: 70px;
    border-radius: 50%;
    opacity: 1;
    outline : none;
    margin: auto 50px;
    background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
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