import React from 'react';
import RoundButton from '../../atoms/RoundButton/RoundButton';
import ButtonLabel from '../../atoms/ButtonLabel/ButtonLabel';

const Icon = (props) => {
    return (
        <div>
            <RoundButton imgSrc={props.imgSrc}/>
            <ButtonLabel label={props.label}/> 
        </div>
    )
}

export default Icon;