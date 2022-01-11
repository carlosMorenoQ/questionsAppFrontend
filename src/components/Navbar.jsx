import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Offcanvas } from './Offcanvas'

export const Navbar = ({ auth }) => {

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-primary">
            <div className="container-fluid">

                <span className="navbar-brand text-light">
                    <img
                        src="https://sites.google.com/site/plataformanacionalmalaga/_/rsrc/1468741992306/preguntas-frecuentes/question.png?height=100&width=50"
                        alt="logo"  
                        width={40}
                        height={30}
                        className="d-inline-block align-text-top" />
                </span>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                style={{ textDecoration: 'none' }}
                                to="/">
                                <span className="nav-link active text-light" aria-current="page">Inicio</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                style={{ textDecoration: 'none' }}
                                to="questions">
                                <span className="nav-link text-light" >Preguntas</span>
                            </Link>
                        </li>

                        {auth &&
                            <Fragment>
                                <li className="nav-item">
                                    <Link
                                        style={{ textDecoration: 'none' }}
                                        to="new">
                                        <span className="nav-link text-light" >Nueva Pregunta</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        style={{ textDecoration: 'none' }}
                                        to="list">
                                        <span className="nav-link text-light" tabIndex="-1" aria-disabled="true">Mis preguntas</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        style={{ textDecoration: 'none' }}
                                        to="favorites">
                                        <span className="nav-link text-light" tabIndex="-1" aria-disabled="true">Favoritos</span>
                                    </Link>
                                </li>
                                <li style={{ cursor: 'pointer' }} className="nav-item">
                                    <span data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className="nav-link text-light" tabIndex="-1" aria-disabled="true">Sesion</span>
                                </li>

                                <Offcanvas />
                            </Fragment>
                        }

                    </ul>
                </div>



            </div>
        </nav>
    )
}
