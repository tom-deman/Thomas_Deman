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


const App = (() => {

    const linksTabs = [
        'In Quietude',
        'Modernity',
        'Exhibition',
        'Disorder',
        'Contact'
    ]

    const galleryName = [
        '"In Quietude 2016-2019"',
        '"Modernity 2015-2016"',
        '"Exhibition 2017"',
        '"Disorder 2018-2019"'
    ]

    const hover = 'hover:text-gray-700'

return(
    <StrictMode>
        <div className="flex w-screen h-screen">
            <div className="w-1/3 pl-12">

                <h1 className={`mt-12 text-3xl font-thin ${hover}`}>
                    Thomas Deman
                </h1>

                <ul className="mt-12 font-thin pl-2">
                    {linksTabs.map(
                        (e, i) => {
                            if(i === 3)
                                return (
                                    <li className={`my-8 ${hover}`}>
                                        {e}
                                    </li>
                                )
                            return (
                                <li className={hover}>
                                    {e}
                                </li>
                            )
                        }
                    )}
                </ul>

                <p className="font-thin text-xs mt-64 pl-2">{galleryName[0]}</p>
            </div>

            <div className="w-2/3 imgMain"></div>
        </div>
    </StrictMode>
    )
})


export default App
