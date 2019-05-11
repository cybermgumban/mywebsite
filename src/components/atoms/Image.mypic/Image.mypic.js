import React from 'react';
import mypic from '../../assets/mypic.png';
import styled from 'styled-components';

const ImageWrapper = styled.img`
    position: relative;
    display: block;
    height: auto;
    width: 300px;
    border-radius: 50%;
    border-style: solid;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
`
const ImageMyPic = (props) => {
    return (
        <ImageWrapper src={mypic} alt="mypic" />
    );
};

export default ImageMyPic;