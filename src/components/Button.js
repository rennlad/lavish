import React from 'react';

import './Button.css';


// Buttons stlyes, sizes and colors - first value acting as a default
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];
const COLORS = ['primary', 'blue', 'red', 'green'];


export const Button = ({ children, type, onClick, buttonStyle, buttonSize, buttonColor }) => {

    // Check for style values and set as default if not found
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkButtonColor = COLORS.includes(buttonColor) ? buttonColor : null;


    return (
        <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
            onClick={onClick}
            type={type}
        >{children}</button>
    )
};