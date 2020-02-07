export const carousel = ( count, tab, setCount, hidden, setHidden ) => {
    count < ( tab.length - 1 )
        ? setCount( count + 1 )
        : setCount( 0 )
    if( hidden === false )
        setHidden( true )
}

export const carouselReverse = ( count, tab, setCount, hidden, setHidden ) => {
    count > 0
        ? setCount( count - 1 )
        : setCount( tab.length - 1 )
    if( hidden === false )
        setHidden( true )
}

export const galleryLinks = [
    {
        component: 'Inquietude',
        years    : '"In Quietude 2016-2019"'
    },
    {
        component: 'Modernity',
        years    : '"Modernity 2015-2016"'
    },
    {
        component: 'Exhibition',
        years    : '"Exhibition 2017"'
    },
    {
        component: 'Disorder',
        years    : '"Disorder 2018-2019"'
    },
    {
        component: 'Contact',
        years    : null
    },
]

export const hover = 'hover:text-gray-700'
