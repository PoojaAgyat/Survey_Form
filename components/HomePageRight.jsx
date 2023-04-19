import React from 'react'

const HomePageRight = () => {
    return (
        <div className='homePageRight'>
            <div className='signIncontainer'>
                <div >
                    <h2>Sign In</h2>
                    <p>Sign in to continue access pages</p>
                </div>

                <div>
                    <input type="email" name="email" id="email" placeholder='email' />
                </div>
                <div>
                    <input type="password" name="password" id="password" placeholder='password' />
                </div>

                <div>
                    <button>Sign in</button>
                </div>

            </div>
        </div>
    )
}

export default HomePageRight