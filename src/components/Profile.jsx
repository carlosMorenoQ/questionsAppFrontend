import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/authAction';
import { editName } from '../actions/registerAction';
import { useForm } from '../hooks/useForm';

export const Profile = () => {

    const userLogged = useSelector(store => store.login);
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        name: '',
    })

    const { name } = values;

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(editName(userLogged.uid, name, userLogged.foto, userLogged.correo, userLogged.provider));
        setEdit(false);
        reset();
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className="container mt-5">
            {
                userLogged.foto ?
                    <div className="d-flex justify-content-center">
                        <img className="border border-dark rounded-circle" src={userLogged.foto} alt="profilePic" />
                    </div>
                    :
                    <div className="d-flex justify-content-center">
                        <img src='https://www.hoganassessments.com/wp-content/uploads/2013/08/qa_logo.png' width={100} alt="profilePic" />
                    </div>
            }
            <h4 className="text-center mt-4">
                {userLogged.displayName}
            </h4>
            <div className='d-flex justify-content-center mt-3'>
                {userLogged.provider === 'password' &&
                    <button onClick={() => setEdit(true)} className="btn btn-outline-danger btn-sm shadow-sm">Change your Name</button>
                }
                <button onClick={handleLogout} className="btn btn-danger shadow-sm ms-1">Sing Out</button>
            </div>
            {
                edit &&
                <form onSubmit={handleEdit}>
                    <div className="form-floating mt-5 w-50 mx-auto">
                        <input
                            className="form-control shadow-sm"
                            id="floatingTextarea2"
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                        ></input>
                        <label htmlFor="floatingTextarea2">New name</label>
                    </div>

                    <div className="d-flex justify-content-center my-3">
                        <button type="submit" className="btn btn-danger shadow-sm me-2">Send</button>
                        <button onClick={() => setEdit(false)} className="btn btn-outline-danger shadow-sm ">Cancel</button>
                    </div>
                </form>
            }
        </div>
    )
}
