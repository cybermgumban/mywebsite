import React from 'react';
import ImageMyPic from '../atoms/Image.mypic/Image.mypic';
import Label from '../atoms/Label/Label.js'

const Homepage = (props) => {
    return (
        <div>
            <ImageMyPic />
            <Label style={{fontSize:30, marginTop: 30}} label={ "Marlon Gumban" }></Label>
            <Label style={{fontSize:20, marginTop: 15}} label={ "Junior Front-End Software Developer" }></Label>
        </div>
    );
};

export default Homepage;