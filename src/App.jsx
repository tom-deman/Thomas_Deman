import React, {
    useState,
    StrictMode
} from 'react'


import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Switch } from 'react-router'


import './assets/css/tailwind.css'
import './assets/css/font-awesome.css'
import './assets/css/animate.css'
import './assets/sass/style.sass'

import Gallery from './components/Gallery'
import Contact from './components/Contact'

import tabInquietude from './assets/js/inquietude'
import tabModernity from './assets/js/modernity'
import tabExhibition from './assets/js/exhibition'
import tabDisorder from './assets/js/disorder'


const App = () => {
    const [galleryCount, setGalleryCount] = useState(0)

    const [countInquietude, setCountInquietude] = useState(0)
    const [countModernity, setCountModernity] = useState(0)
    const [countExhibition, setCountExhibition] = useState(0)
    const [countDisorder, setCountDisorder] = useState(0)

    const [hiddenInquietude, setHiddenInquietude] = useState(false)
    const [hiddenModernity, setHiddenModernity] = useState(false)
    const [hiddenExhibition, setHiddenExhibition] = useState(false)
    const [hiddenDisorder, setHiddenDisorder] = useState(false)


    const galleryLinks = [
        {
            component: 'Inquietude',
            years: '"In Quietude 2016-2019"'
        },
        {
            component: 'Modernity',
            years: '"Modernity 2015-2016"'
        },
        {
            component: 'Exhibition',
            years: '"Exhibition 2017"'
        },
        {
            component: 'Disorder',
            years: '"Disorder 2018-2019"'
        },
        {
            component: 'Contact',
            years: null
        },
    ]


    const carousel = (count, tab, setCount) => 
        count < (tab.length - 1) ?
            setCount(count + 1) :
            setCount(0)

    const carouselReverse = (count, tab, setCount) => 
        count > 0 ?
            setCount(count - 1) :
            setCount(tab.length - 1)

    const changeInquietude = () => {
        carousel(countInquietude, tabInquietude, setCountInquietude)
        if(hiddenInquietude === false)
            setHiddenInquietude(true)
    }
    
    const changeModernity = () => {
        carousel(countModernity, tabModernity, setCountModernity)
        if(hiddenModernity === false)
            setHiddenModernity(true)
    }

    const changeExhibition = () => {
        carousel(countExhibition, tabExhibition, setCountExhibition)
        if(hiddenExhibition === false)
            setHiddenExhibition(true)
    }

    const changeDisorder = () => {
        carousel(countDisorder, tabDisorder, setCountDisorder)
        if(hiddenDisorder === false)
            setHiddenDisorder(true)
    }

    const changeGallery = (event) => {
        if(event.keyCode === 39)
            switch(galleryCount) {
                case 0:
                    carousel(countInquietude, tabInquietude, setCountInquietude)
                    break
                case 1:
                    carousel(countModernity, tabModernity, setCountModernity)
                    break
                case 2:
                    carousel(countExhibition, tabExhibition, setCountExhibition)
                    break
                case 3:
                    carousel(countDisorder, tabDisorder, setCountDisorder)
                    break
                default:
                    // Do nothing
            }
        else if(event.keyCode === 37)
            switch(galleryCount) {
                case 0:
                    carouselReverse(countInquietude, tabInquietude, setCountInquietude)
                    break
                case 1:
                    carouselReverse(countModernity, tabModernity, setCountModernity)
                    break
                case 2:
                    carouselReverse(countExhibition, tabExhibition, setCountExhibition)
                    break
                case 3:
                    carouselReverse(countDisorder, tabDisorder, setCountDisorder)
                    break
                default:
                    // Do nothing
            }
    }

    const hover = 'hover:text-gray-700'


return(
    <StrictMode>
        <div 
            className="flex w-screen h-screen disable-scroll" 
            tabIndex="0" 
            onKeyDown={ changeGallery }
        >
            <Router>

                <div className="w-1/4 pl-12">
                    <Link 
                        to="/" 
                        onClick={ () => setGalleryCount(0) }
                    >
                        <h1 className={`mt-12 text-3xl font-thin ${hover}`}>
                            Thomas Deman
                        </h1>
                    </Link>

                    <ul className="mt-12 pl-2">
                        { galleryLinks.map((e, i) => {
                            if(i === 3)
                                return (
                                    <li 
                                        key={i} 
                                        className={`my-8 font-thin ${hover}`} 
                                    >
                                        <Link 
                                            to={`/${e.component}`} 
                                            onClick={ () => setGalleryCount(i) }
                                        >
                                            {e.component}
                                        </Link>
                                    </li>
                                )
                            return (
                                <li 
                                    className={`font-thin ${hover}`} 
                                    key={e.component}
                                >
                                    {i === 0 ? 
                                        <Link 
                                            to={`/${e.component}`}
                                            onClick={ () => setGalleryCount(i) }
                                        >
                                            In Quietude
                                        </Link> :

                                        <Link 
                                            to={`/${e.component}`}
                                            onClick={ () => setGalleryCount(i) }
                                        >
                                            {e.component}
                                        </Link>
                                    }
                                </li>
                            )
                        })}
                    </ul>

                    <p className="font-thin text-xs mt-64 pl-2">
                        {galleryLinks[galleryCount].years}
                    </p>
                </div>

                <div className="w-3/4">
                    <Link to="/Inquietude">
                        <Switch>
                            <Route exact path="/">
                                <div className="imgMain h-full w-full"></div>
                            </Route>
                        </Switch>
                    </Link>
                    
                    <div className="w-4/6 mt-8">
                        <Switch>
                            <Route path="/Inquietude">
                                <Gallery
                                    tab={tabInquietude}
                                    count={countInquietude}
                                    changeImg={changeInquietude}
                                    hiddenClass={hiddenInquietude}
                                />
                            </Route>
                            <Route path="/Modernity">
                                <Gallery 
                                    tab={tabModernity}
                                    count={countModernity}
                                    changeImg={changeModernity}
                                    hiddenClass={hiddenModernity}
                                />
                            </Route>
                            <Route path="/Exhibition">
                                <Gallery 
                                    tab={tabExhibition}
                                    count={countExhibition}
                                    changeImg={changeExhibition}
                                    hiddenClass={hiddenExhibition}
                                />
                            </Route>
                            <Route path="/Disorder">
                                <Gallery 
                                    tab={tabDisorder}
                                    count={countDisorder}
                                    changeImg={changeDisorder}
                                    hiddenClass={hiddenDisorder}
                                />
                            </Route>
                            <Route path="/Contact" component={Contact} />
                        </Switch>
                    </div>
                </div>

            </Router>
        </div>
    </StrictMode>
    )
}


export default App
