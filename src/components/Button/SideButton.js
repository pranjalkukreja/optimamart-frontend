import React from 'react';
import './Button.css';

const STYLES = ['btn--primary1', 'btn--outline1']

const SIZER = ['btn--medium1', 'btn--large1', 'btn--mobile1', 'btn--wide1']

const COLOR = ['primary1', 'red1', 'blue1', 'green1']


export const SideButton = ({ children, type, onClick, buttonStyle, buttonSize, buttonColor }) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZER.includes(buttonSize) ? buttonSize : SIZER[0]

    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;



    return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick} type={type}>{children}</button>
    )
}