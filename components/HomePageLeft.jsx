import React from 'react'

const HomePageLeft = () => {
    return (
        <div className='homePageLeftParent'>
            <div className='homePageLeft'>
                <div >
                    <h2>Welcome to Opinion Poll</h2>
                    <h3>Please take a few minutes to answer our survey questions.</h3>
                    <p className='homePageLeftWelcomeP'>Sign in to continue access pages</p>
                </div>
                <div>
                    <p className='homePageLeftRegisterP'>Don't Have An Account?</p>
                    <button>Register</button>
                </div>
            </div>

        </div>
    )
}

export default HomePageLeft