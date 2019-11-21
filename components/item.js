import React from 'react';

// import { Container } from './styles';

const Item = props => (
    <div 
        className={`item ${props.available!=-1 ? 'available' : ''}`}
        onMouseOver={props.onMouseOver}
        onMouseDown={ props.onClick }
    >
        {props.children}
    </div>
)
    
export default Item
