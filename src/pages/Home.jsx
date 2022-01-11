import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Offcanvas } from '../components/Offcanvas'

export const Home = ({ auth }) => {

    const navigate = useNavigate();

    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const userLogged = useSelector(store => store.login);

    const handleLogin = () => {
        setLogin(true)
        setRegister(false)
    }

    const handleRegister = () => {
        setRegister(true)
        setLogin(false)
    }

    const handleGoToQuestions = () => {
        navigate('questions')
    }

    const handleGoToFavorites = () => {
        navigate('favorites')
    }

    return (
        <div className="container my-5">
            <h1 className="d-flex text-primary justify-content-center mt-1"> HOME </h1>
            <h6 className="d-flex justify-content-center  mt-4"> Welcome {userLogged.displayName&&`${userLogged.displayName},`} to the question and answer app. </h6>
            <div className='d-flex justify-content-center  mt-3'>
                <button onClick={handleGoToQuestions} className="btn btn-danger">View Questions</button>
            </div>
            {!auth ?
                <Fragment>
                    <h6 className="d-flex justify-content-center mt-3"> Or </h6>
                    <div className='d-flex justify-content-center mt-3'>
                        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={handleRegister} className="btn btn-danger shadow-sm">Register</button>
                        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={handleLogin} className="btn btn-outline-danger shadow-sm ms-1">Login</button>
                    </div>
                </Fragment>
                :
                <div className='d-flex justify-content-center mt-3'>
                    <button onClick={handleGoToFavorites} className="btn btn-danger shadow-sm">Favorites</button>
                </div>
            }
            <Offcanvas login={login} register={register} />

        </div>
    )
}
    