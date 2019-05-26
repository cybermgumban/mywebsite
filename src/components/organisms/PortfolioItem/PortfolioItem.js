import React from 'react';
import styled from 'styled-components';

const OutsideWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
`

const InsideWrapper = styled.div`
    margin: 20px 0;
`

const ImageWrapper = styled.img`
    margin: 20px;
    border: 1px solid grey;
    border-radius: 10px;

`

const PortfolioItem = (props) => {
    return (
        <OutsideWrapper>
            <ImageWrapper src={props.imgSrc} alt="sample"/>
            <InsideWrapper>
                <p>Title: {props.title}</p>
                <p>Type: {props.type}</p>
                <p>Description: {props.description}</p>
                <p>Modules: </p>
                {props.modules.map((mod) => (
                    <ul key={mod.index}>
                        <li key={mod.index}>{mod}</li>
                    </ul>
                ))}
            </InsideWrapper>
        </OutsideWrapper>
    )
}

export default PortfolioItem;