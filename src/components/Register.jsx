import React from 'react'
import { useDispatch } from 'react-redux';
import { registroEmailPasswordNombre } from '../actions/registerAction';
// import { registroEmailPasswordNombre } from '../actions/actionRegister';
import { useForm } from '../hooks/useForm';

export default function Register() {

    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        email: '',
        password: '',
        nombreCompleto: ''
    })

    const { email, password, nombreCompleto } = values;

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(registroEmailPasswordNombre(nombreCompleto, email, password))
        reset();

    }

    return (<>
        <div className="container mt-2">
            <form className="w-50 mx-auto" onSubmit={handleRegister}>
                {/* <h4 className="d-flex justify-content-center text-center mb-4">
                    Registrarse
                </h4> */}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control shadow-sm"
                        id="nombre"
                        aria-describedby="emailHelp"
                        name="nombreCompleto"
                        value={nombreCompleto}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
                    <input
                        type="email"
                        className="form-control shadow-sm"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control shadow-sm"
                        id="exampleInputPassword1"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="d-flex align-items-center flex-column mt-5">
                    <button type="submit" className="btn btn-outline-success">Registrar</button>
                </div>
            </form>
        </div>
    </>)
}