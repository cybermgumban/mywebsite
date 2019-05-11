import React from 'react';
import RoundButton from '../../atoms/RoundButton/RoundButton';
import ButtonLabel from '../../atoms/ButtonLabel/ButtonLabel';
import styled from 'styled-components';

const IconWrapper = styled.div`
    text-align: center;
    display: inline-block;
    margin: 60px 150px 0px 150px;
`

const Icon = (props) => {
    return (
        <IconWrapper>
            <RoundButton imgSrc={props.imgSrc} />
            <ButtonLabel label={props.label}/> 
        </IconWrapper>
    )
}

export default Icon;