import React from 'react';
import styled from 'styled-components';

const IconWrapperStyle = styled.div`
    position: relative;
    margin: auto;
    text-align: center;
    border-top: 1px solid black;
`

const IconWrapper = (props) => {
    return (
        <IconWrapperStyle>
            {props.children}
        </IconWrapperStyle>
    )
}

export default IconWrapper;