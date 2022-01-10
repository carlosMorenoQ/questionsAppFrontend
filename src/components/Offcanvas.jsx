import React from 'react'
import { useSelector } from 'react-redux'
import Login from './Login'
import { Profile } from './Profile'
import Register from './Register'

export const Offcanvas = ({ login }) => {

    const name = useSelector(store => store.login.displayName)

    return (

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">
                    {name? 'Profile': login ? 'Login' : 'Register'}
                </h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {name ?
                    <Profile />
                    :
                    login ?
                        <Login />
                        :
                        <Register />
                }
            </div>
        </div>
    )
}
