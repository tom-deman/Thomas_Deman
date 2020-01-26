import React, { StrictMode } from 'react'

const Show = ( props ) => {

    return(
        <StrictMode>
            { props.children }
        </StrictMode>
    )
}

export default Show
