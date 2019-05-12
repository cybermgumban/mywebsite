import React from 'react';
import styled from 'styled-components';

const ButtonLabelWrapper = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    font-family: 'Trebuchet MS';
    color: white;
`

const ButtonLabel = (props) => {
    return (
        <ButtonLabelWrapper>{props.label}</ButtonLabelWrapper>
    );
};

export default ButtonLabel;