import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/myLogo.PNG';

const LogoWrapper = styled.img`
    display: block;
    max-width: 150px;
    max-height: 100px;
    width: auto;
    height: auto;
    border-radius: 25px;
    border: 1px black solid;
    box-shadow: 5px 5px;
`

const Logo = () => {
    return <LogoWrapper src={logo} alt="mylogo"/>
}

export default Logo;