import React from 'react';
import styled from 'styled-components';

const IconWrapperStyle = styled.div`
    position: relative;
    /* margin-bottom: 118px; */
    text-align: center;
    padding-bottom: 122px;
`

const IconWrapper = (props) => {
    return (
        <IconWrapperStyle>
            {props.children}
        </IconWrapperStyle>
    )
}

export default IconWrapper;