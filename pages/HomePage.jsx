import React from 'react'
import HomePageLeft from '../components/HomePageLeft'
import HomePageRight from '../components/HomePageRight'

const HomePage = () => {
    return (
        <div className='homeContainer'>
            <HomePageLeft />
            <HomePageRight />
        </div>
    )
}

export default HomePage