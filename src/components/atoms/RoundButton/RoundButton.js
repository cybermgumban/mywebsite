import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    height: 90px;
    width: 90px;
    border-radius: 50%;
    opacity: 1;
    outline : none;
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