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


const App = () => {
    const [galleryCount, setGalleryCount] = useState(0)
    
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


return(
    <StrictMode>
        <div className="flex w-screen h-screen">
            <Router>

                <div className="w-1/3 pl-12">

                    <Link to="/" onClick={ () => setGalleryCount(0) }>
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

                    <p className="font-thin text-xs mt-64 pl-2">{galleryLinks[galleryCount].years}</p>
                </div>

                <div className="w-2/3">
                    <Switch>
                        <Link to="/Inquietude">
                            <Route exact path="/" component={Main} />
                        </Link>
                    </Switch>
                    <Switch>
                        <Route path="/Inquietude" component={Inquietude} />
                        <Route path="/Modernity" component={Modernity} />
                        <Route path="/Exhibition" component={Exhibition} />
                        <Route path="/Disorder" component={Disorder} />
                        <Route path="/Contact" component={Contact} />
                    </Switch>
                </div>

            </Router>
        </div>
    </StrictMode>
    )
}


export default App
