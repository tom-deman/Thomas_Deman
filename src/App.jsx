import React, {
    useState,
    StrictMode
} from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Switch }                               from 'react-router'

import './assets/css/tailwind.css'
import './assets/sass/style.sass'

import Gallery    from './components/Gallery'
import Contact    from './components/Contact'
import Show       from './components/Show'
import Navigation from './components/Navigation'

import tabInquietude from './assets/js/inquietude'
import tabModernity  from './assets/js/modernity'
import tabExhibition from './assets/js/exhibition'
import tabDisorder   from './assets/js/disorder'

import {
    carousel,
    carouselReverse,
    hover,
    galleryLinks 
} from './assets/js/global'


const App = () => {

    const [ galleryCount, setGalleryCount ]         = useState( undefined )

    const [ countInquietude, setCountInquietude ]   = useState( 0 )
    const [ countModernity, setCountModernity ]     = useState( 0 )
    const [ countExhibition, setCountExhibition ]   = useState( 0 )
    const [ countDisorder, setCountDisorder ]       = useState( 0 )

    const [ hiddenInquietude, setHiddenInquietude ] = useState( false )
    const [ hiddenModernity, setHiddenModernity ]   = useState( false )
    const [ hiddenExhibition, setHiddenExhibition ] = useState( false )
    const [ hiddenDisorder, setHiddenDisorder ]     = useState( false )


    const inquietudeParams = [ countInquietude, tabInquietude, setCountInquietude, hiddenInquietude, setHiddenInquietude ]
    const modernityParams  = [ countModernity, tabModernity, setCountModernity, hiddenModernity, setHiddenModernity ]
    const exhibitionParams = [ countExhibition, tabExhibition, setCountExhibition, hiddenExhibition, setHiddenExhibition ]
    const disorderParams   = [ countDisorder, tabDisorder, setCountDisorder, hiddenDisorder, setHiddenDisorder ]


    const changeInquietude = () => 
        carousel( ...inquietudeParams )

    const changeModernity = () =>
        carousel( ...modernityParams )

    const changeExhibition = () => 
        carousel( ...exhibitionParams )

    const changeDisorder = () =>
        carousel( ...disorderParams )


    const changeGallery = ( event ) => {
        if( event.keyCode === 39 )
            switch( galleryCount ) {
                case 0:
                    carousel( ...inquietudeParams )
                    break
                case 1:
                    carousel( ...modernityParams )
                    break
                case 2:
                    carousel( ...exhibitionParams )
                    break
                case 3:
                    carousel( ...disorderParams )
                    break
                default:
                    // Do nothing
            }
        else if( event.keyCode === 37 )
            switch( galleryCount ) {
                case 0:
                    carouselReverse( ...inquietudeParams )
                    break
                case 1:
                    carouselReverse( ...modernityParams )
                    break
                case 2:
                    carouselReverse( ...exhibitionParams )
                    break
                case 3:
                    carouselReverse( ...disorderParams )
                    break
                default:
                    // Do nothing
            }
    }


    const changeCurrentGallery = ( a ) => {
        setGalleryCount( a )
        switch( a ) {
            case 0:
                setCountInquietude( 0 )
                break
            case 1:
                setCountModernity( 0 )
                break
            case 2:
                setCountExhibition( 0 )
                break
            case 3:
                setCountDisorder( 0 )
                break
            default:
                // Do nothing
        }
    }


    return(
        <StrictMode>
            <div
                className="md:flex block md:w-screen md:h-screen disable-scroll"
                tabIndex="0"
                onKeyDown={ changeGallery }
            >
                <Router>

                    <div className="md:w-1/4 w-full pl-12">
                        <Navigation>
                            <Link
                                className={galleryCount === undefined ? 'text-gray-700' : ''}
                                to="/Thomas_Deman/"
                                onClick={ () => setGalleryCount( undefined ) }
                            >
                                <h1 className={ `mt-12 text-3xl font-thin ${ hover }` }>
                                    Thomas Deman
                                </h1>
                            </Link>

                            <ul className="mt-12 pl-2">
                                { galleryLinks.map(( e, i ) => {
                                    if( i === 3 )
                                        return(
                                            <li
                                                key={ i }
                                                className={ `my-8 font-thin ${ hover }` }
                                            >
                                                <Link
                                                    className={galleryCount === i ? 'text-gray-700' : ''}
                                                    to={ `/${ e.component }` }
                                                    onClick={ () => changeCurrentGallery( i ) }
                                                >
                                                    { e.component }
                                                </Link>
                                            </li>
                                        )
                                    return(
                                        <li
                                            className={ `font-thin ${ hover }` }
                                            key={ e.component }
                                        >
                                            { i === 0
                                                ?
                                                    <Link
                                                        className={galleryCount === i ? 'text-gray-700' : ''}
                                                        to={ `/${ e.component }` }
                                                        onClick={ () => changeCurrentGallery( i ) }
                                                    >
                                                        In Quietude
                                                    </Link>
                                                :
                                                    <Link
                                                        className={galleryCount === i ? 'text-gray-700' : ''}
                                                        to={ `/${ e.component }` }
                                                        onClick={ () => changeCurrentGallery( i ) }
                                                    >
                                                        { e.component }
                                                    </Link>
                                            }
                                        </li>
                                    )
                                })}
                            </ul>

                            <p className="font-thin text-xs md:mt-64 mt-24 pl-2">
                                { galleryCount !== undefined ? galleryLinks[ galleryCount ].years : '' }
                            </p>
                        </Navigation>
                    </div>

                    <div className="md:w-3/4 w-full">
                        <Show>
                            <Link
                                to="/Inquietude"
                                onClick={ () => setGalleryCount( 0 ) }
                            >
                                <Switch>
                                    <Route exact path="/Thomas_Deman/">
                                        <div className="imgMain h-full w-full" />
                                    </Route>
                                </Switch>
                            </Link>

                            <div className="md:w-4/6 w-full mt-8">
                                <Switch>
                                    <Route path="/Inquietude">
                                        <Gallery
                                            tab={ tabInquietude }
                                            count={ countInquietude }
                                            changeImg={ changeInquietude }
                                            hiddenClass={ hiddenInquietude }
                                        />
                                    </Route>

                                    <Route path="/Modernity">
                                        <Gallery
                                            tab={ tabModernity }
                                            count={ countModernity }
                                            changeImg={ changeModernity }
                                            hiddenClass={ hiddenModernity }
                                        />
                                    </Route>

                                    <Route path="/Exhibition">
                                        <Gallery
                                            tab={ tabExhibition }
                                            count={ countExhibition }
                                            changeImg={ changeExhibition }
                                            hiddenClass={ hiddenExhibition }
                                        />
                                    </Route>

                                    <Route path="/Disorder">
                                        <Gallery
                                            tab={ tabDisorder }
                                            count={ countDisorder }
                                            changeImg={ changeDisorder }
                                            hiddenClass={ hiddenDisorder }
                                        />
                                    </Route>

                                    <Route
                                        path="/Contact"
                                        component={ Contact }
                                    />
                                </Switch>
                            </div>
                        </Show>
                    </div>

                </Router>
            </div>
        </StrictMode>
    )
}


export default App
