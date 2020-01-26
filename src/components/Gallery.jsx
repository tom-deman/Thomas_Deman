import React, { StrictMode } from 'react'


const Gallery = ( props ) => {

    return (
        <StrictMode>
            <div className="gallery">
                <img 
                    className="picture" 
                    src={ props.tab[ props.count ] } 
                    onClick={ () => props.changeImg() } 
                    alt="In Quietude photograph" 
                />
            </div>
            <div className="md:flex hidden justify-around mt-6">
                <div className="w-2/4">
                    <span className={ props.hiddenClass ? 'hidden' : 'font-thin text-xs' }>
                        Click or use arrow keys to navigate
                    </span>
                </div>
                <div className="w-1/4">
                    <span className="text-sm font-thin">
                        { props.count + 1 }/{ props.tab.length }
                    </span>
                </div>
            </div>
        </StrictMode>
    )
}


export default Gallery
