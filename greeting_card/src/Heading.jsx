import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const currTime = new Date().getHours();
let greeting = ' ';

const cssStyle = { };


if(currTime >=1 && currTime <12){
    greeting = 'Good Morning';
    cssStyle.color = 'Green';
}else if(currTime >=12 && currTime <= 19){
    greeting = 'Good Afternoon';
    cssStyle.color = 'Orange';
}else{
    greeting = 'Good Night';
    cssStyle.color = 'Black';
}

function Heading(){
    return(
    <div>
    <h1>Hello Sir !! <span style = {cssStyle}> {greeting} </span> </h1>
    </div>
    );
}

export default Heading;