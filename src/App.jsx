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

import Inquietude from './components/Inquietude'
import Modernity from './components/Modernity'
import Exhibition from './components/Exhibition'
import Disorder from './components/Disorder'
import Contact from './components/Contact'

import tabInquietude from './assets/js/inquietude'
import tabModernity from './assets/js/modernity'


const App = () => {
    const [galleryCount, setGalleryCount] = useState(0)

    const [countInquietude, setCountInquietude] = useState(0)
    const [countModernity, setCountModernity] = useState(0)
    
    const Main = () => {
        return <div className="imgMain h-full w-full"></div>
    }

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
            component: 'Disorder',
            years: '"Disorder 2018-2019"'
        },
        {
            component: 'Exhibition',
            years: '"Exhibition 2017"'
        },
        {
            component: 'Contact',
            years: null
        },
    ]

    const hover = 'hover:text-gray-700'

    const carousel = (a, b, c) => {
        if(a < (b.length - 1))
            c(a + 1)
        else 
            c(0)
    }

    const changeInquietude = () => 
        carousel(countInquietude, tabInquietude, setCountInquietude)
    
    const changeModernity = () => 
        carousel(countModernity, tabModernity, setCountModernity)


return(
    <StrictMode>
        <div className="flex w-screen h-screen disable-scroll">
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

                <div className="w-3/4 flex">
                    <Switch>
                        <Link to="/Inquietude">
                            <Route exact path="/" component={Main} />
                        </Link>
                    </Switch>
                    
                    <div className="w-4/6 mt-8">
                        <Switch>
                            <Route path="/Inquietude">
                                <Inquietude 
                                    tab={tabInquietude}
                                    count={countInquietude}
                                    changeImg={changeInquietude}
                                />
                            </Route>
                            <Route path="/Modernity">
                                <Inquietude 
                                    tab={tabModernity}
                                    count={countModernity}
                                    changeImg={changeModernity}
                                />
                            </Route>
                            <Route path="/Exhibition" component={Exhibition} />
                            <Route path="/Disorder" component={Disorder} />
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
