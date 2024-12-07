import React from 'react';
import './Home.css'
function Box(props) {
    
    return (
        <div onClick={props.onClick} className='boxdisplay'>
            {props.value}
        </div>
    );
}

export default Box;