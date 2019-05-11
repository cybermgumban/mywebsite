import React from 'react';
import styled from 'styled-components';

const IconWrapperStyle = styled.div`
    position: relative;
    /* margin-left: 300px;
    margin-right: 300px; */
    margin-bottom: auto;
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