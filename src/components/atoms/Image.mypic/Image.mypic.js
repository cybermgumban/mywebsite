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
    margin-top: 30px;
    border: 1.5px solid black;    
    box-shadow: 0px 5px 10px grey;

`
const ImageMyPic = (props) => {
    return (
        <div>
            <ImageWrapper src={mypic} alt="mypic" />
        </div>
    );
};

export default ImageMyPic;