import React from 'react';
import styled from 'styled-components';

const ButtonLabelWrapper = styled.div`
    font-weight: bold;
    margin-top: 20px;
    font-family: 'Trebuchet MS';
`

const ButtonLabel = (props) => {
    return (
        <ButtonLabelWrapper>{props.label}</ButtonLabelWrapper>
    );
};

export default ButtonLabel;