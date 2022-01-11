import React from 'react'
import "./Footer.css"

export const Footer = () => {
    return (
        <div className='main-footer bg-primary'>
            <div className="container">
                    <div className="row">   
                        <p className="col-sm text-light text-end">
                            {/* &copy;{new Date().getFullYear()} Q&A | All Right reserved. */}
                            comentario del footer
                        </p>
                    </div>
                
            </div>
        </div>
    )
}