import React, { StrictMode } from 'react'

const Navigation = (props) => {
    return(
        <StrictMode>
            {props.children}
        </StrictMode>
    )
}

export default Navigation
