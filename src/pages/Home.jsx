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
            <h1 className="d-flex justify-content-center mt-1"> INICIO </h1>
            <h6 className="d-flex justify-content-center  mt-4"> Bienvenido {userLogged.displayName&&`${userLogged.displayName},`} a la aplicacion de preguntas y respuestas. </h6>
            <div className='d-flex justify-content-center  mt-3'>
                <button onClick={handleGoToQuestions} className="btn btn-success">Ver preguntas</button>
            </div>
            {!auth ?
                <Fragment>
                    <h6 className="d-flex justify-content-center mt-3"> O </h6>
                    <div className='d-flex justify-content-center mt-3'>
                        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={handleRegister} className="btn btn-success shadow-sm">Registro</button>
                        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={handleLogin} className="btn btn-outline-success shadow-sm ms-1">Ingreso</button>
                    </div>
                </Fragment>
                :
                <div className='d-flex justify-content-center mt-3'>
                    <button onClick={handleGoToFavorites} className="btn btn-success shadow-sm">Favoritos</button>
                </div>
            }
            <Offcanvas login={login} register={register} />

        </div>
    )
}
    