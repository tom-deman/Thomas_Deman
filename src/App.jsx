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


const App = () => {
    const [galleryYears, setGalleryYears] = useState([
        '"In Quietude 2016-2019"',
        '"Modernity 2015-2016"',
        '"Disorder 2018-2019"',
        '"Exhibition 2017"'
    ])
    
    const Main = () => {
        return <div className="imgMain h-full w-full"></div>
    }

    const linksTab = [
        'Inquietude',
        'Modernity',
        'Disorder',
        'Exhibition',
        'Contact',
    ]

    const hover = 'hover:text-gray-700'


return(
    <StrictMode>
        <div className="flex w-screen h-screen">
            <Router>

                <div className="w-1/3 pl-12">

                    <Link to="/">
                        <h1 className={`mt-12 text-3xl font-thin ${hover}`}>
                            Thomas Deman
                        </h1>
                    </Link>

                    <ul className="mt-12 pl-2">
                        { linksTab.map(
                            (e, i) => {
                                if(i === 3)
                                    return (
                                        <li 
                                            key={i} 
                                            className={`my-8 font-thin ${hover}`} 
                                        >
                                            <Link to={`/${e}`} >
                                                {e}
                                            </Link>
                                        </li>
                                    )
                                return (
                                    <li 
                                        className={`font-thin ${hover}`} 
                                        key={e}
                                    >
                                        {i === 0 ? 
                                            <Link to={`/${e}`} >
                                                In Quietude
                                            </Link> :

                                            <Link to={`/${e}`} >
                                                {e}
                                            </Link>
                                        }
                                    </li>
                                )
                            }
                        )}
                    </ul>

                    <p className="font-thin text-xs mt-64 pl-2">{galleryYears[0]}</p>
                </div>


                <div className="w-2/3">
                    <Switch>
                        <Link to="/Inquietude">
                            <Route exact path="/" component={Main} />
                        </Link>
                        <Route path="/Inquietude" component={Inquietude} />
                    </Switch>
                </div>

            </Router>
        </div>
    </StrictMode>
    )
}


export default App
