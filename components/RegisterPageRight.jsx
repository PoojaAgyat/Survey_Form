import React from 'react';

const RegisterPageRight = () => {
    return (
        <div className='registerPageRight'>
            <div className='registerContainer'>
                <div>
                    <h2>Register</h2>
                    <p>Register to continue accessing pages</p>
                </div>

                <div>
                    <input type="text" name="name" id="name" placeholder='name' />
                </div>
                <div>
                    <input type="email" name="email" id="email" placeholder='email' />
                </div>
                <div>
                    <input type="tel" name="phone" id="phone" placeholder='phone no' />
                </div>
                <div>
                    <input type="text" name="profession" id="profession" placeholder='profession' />
                </div>
                <div>
                    <input type="password" name="password" id="password" placeholder='password' />
                </div>
                <div>
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder='confirm password' />
                </div>

                <div>
                    <button>Register</button>
                </div>

            </div>
        </div>
    );
};

export default RegisterPageRight;
