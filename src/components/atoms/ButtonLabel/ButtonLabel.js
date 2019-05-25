import React from 'react';
import styled from 'styled-components';

const ButtonLabelWrapper = styled.div`
    text-align: center;
    color: white;
    margin-top: 10px;
`

const ButtonLabel = (props) => {
    return (
        <ButtonLabelWrapper>{props.label}</ButtonLabelWrapper>
    );
};

export default ButtonLabel;