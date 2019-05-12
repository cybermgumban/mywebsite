import React from 'react';
import styled from 'styled-components';

const LabelWrapper = styled.div`
    text-align: center;
    margin: auto;
    font-family: 'Trebuchet MS';
    color: white;
`

const Label = (props) => {
    return (
        <LabelWrapper style={props.style}>{props.label}</LabelWrapper>
    );
};

export default Label;