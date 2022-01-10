import React from 'react'
import "./Footer.css"

export const Footer = () => {
    return (
        <div className='main-footer bg-dark'>
            <div className="container">
                    <div className="row">
                        <p className="col-sm text-danger text-end">
                            &copy;{new Date().getFullYear()} Q&A | All Right reserved.
                        </p>
                    </div>
                
            </div>
        </div>
    )
}