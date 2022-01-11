import React from 'react'
import "./Footer.css"

export const Footer = () => {
    return (
        <div className='main-footer bg-primary'>
            <div className="container">
                    <div className="row justify-content-center">   
                        <p className="col-sm text-light text-end">
                            Aplicacion de preguntas y respuestas - 
                            Creada por Carlos Moreno para Sofka U
                            <br/>
                            &copy;{new Date().getFullYear()} | todos los derechos reservados.
                        </p>
                    </div>
                
            </div>
        </div>
    )
}