import React from 'react';
import mypic from '../../assets/mypic.png';
import styled from 'styled-components';

const DivWrapper = styled.div`
    padding-top: 30px;
`

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
        <DivWrapper>
            <ImageWrapper src={mypic} alt="mypic" />
        </DivWrapper>
    );
};

export default ImageMyPic;