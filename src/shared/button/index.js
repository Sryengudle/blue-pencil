import React from "react";

import './style.css'

function Button({
    disabled,
    onClick,
    label,
    variant,
    classes
}) {
    return (
        <button
            className={variant}
            style={classes}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    )
}

export default Button