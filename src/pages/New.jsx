import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postQuestion } from '../actions/questionAction';
import { useForm } from '../hooks/useForm';

export const New = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userLogged = useSelector(store => store.login);
    const path = useSelector(store => store.question.redirect);

    useEffect(() => {
        if(path){
            navigate(path)
        }
    }, [path, navigate])

    const [values, handleInputChange, reset] = useForm({
        type: 'OPEN (LONG OPEN BOX)',
        category: 'TECHNOLOGY AND COMPUTER',
        question: '',
        userId: userLogged.uid,
        email: userLogged.correo
    })

    const { type, category, question, } = values;

    const handleSendQuestion = (e) => {
        e.preventDefault();
        dispatch(postQuestion(values))
        reset();
    }

    return (
        <form className="w-50 mx-auto" onSubmit={handleSendQuestion}>
            <h1 className='my-5 text-center'>New Question</h1>
            <div className="form-floating mt-3">
                <select
                    className="form-select shadow-sm"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    name="type"
                    value={type}
                    onChange={handleInputChange}
                >
                    <option value="OPEN (LONG OPEN BOX)">OPEN (LONG OPEN BOX)</option>
                    <option value="OPINION (SHORT OPEN BOX)">OPINION (SHORT OPEN BOX)</option>
                    <option value="WITH RESULT (OPEN BOX WITH LINK)">WITH RESULT (OPEN BOX WITH LINK)</option>
                    <option value="WITH EVIDENCE (OPEN BOX WITH VIDEO)">WITH EVIDENCE (OPEN BOX WITH VIDEO)</option>
                </select>
                <label htmlFor="floatingSelect">Type</label>
            </div>

            <div className="form-floating mt-3">
                <select
                    className="form-select shadow-sm"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    name="category"
                    value={category}
                    onChange={handleInputChange}
                >
                    <option value="TECHNOLOGY AND COMPUTER">TECHNOLOGY AND COMPUTER</option>
                    <option value="SCIENCES">SCIENCES</option>
                    <option value="SOFTWARE DEVELOPMENT">SOFTWARE DEVELOPMENT</option>
                    <option value="SOCIAL SCIENCES">SOCIAL SCIENCES</option>
                    <option value="LANGUAGE">LANGUAGE</option>
                </select>
                <label htmlFor="floatingSelect">Category</label>
            </div>

            <div className="form-floating mt-3">
                <textarea
                    className="form-control shadow-sm"
                    id="floatingTextarea2"
                    name="question"
                    value={question}
                    onChange={handleInputChange}
                ></textarea>
                <label htmlFor="floatingTextarea2">Question</label>
            </div>

            <div className="d-flex justify-content-center my-3">
                <button type="submit" className="btn btn-danger shadow-sm ">Save</button>
            </div>

        </form>
    )
}
