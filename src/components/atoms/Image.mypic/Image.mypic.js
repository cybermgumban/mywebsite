import React from 'react';
import mypic from '../../assets/mypic.png';
import styled from 'styled-components';

const ImageWrapper = styled.img`
    position: relative;
    display: block;
    height: auto;
    width: 300px;
    border-radius: 50%;
    margin: auto;
    padding: 30px;
`
const ImageMyPic = (props) => {
    return (
        <div>
            <ImageWrapper src={mypic} alt="mypic" />
        </div>
    );
};

export default ImageMyPic;