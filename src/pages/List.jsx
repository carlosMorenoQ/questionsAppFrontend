import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchOwnerQuestions } from '../actions/questionAction';

export const List = () => {
    const dispatch = useDispatch();
    const questions = useSelector(store => store.question.questions);
    const id = useSelector(store => store.login.uid);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchOwnerQuestions(id))
    }, [id, dispatch])

    const handleGoToQuestion = (id) => {
        navigate(`/question/${id}`)
    }

    const handleGoToNewQuestion = () => {
        navigate(`/new`)
    }

    return (
        <div className="container mt-2 w-50 mx-auto">
            <h1 className="d-flex justify-content-center text-center my-5">
                Mis preguntas
            </h1>
            {questions?.length > 0 ?
                <ul className="list-group">
                    {questions.map(data =>
                        <li key={data?.id}
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleGoToQuestion(data?.id)}
                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                        >
                            {data?.question}
                        </li>
                    )
                    }
                </ul>
                :
                <Fragment>
                    <div className='d-flex justify-content-center mt-3'>
                        <h6>- No tienes preguntas -</h6>
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                        <button onClick={handleGoToNewQuestion} className="btn btn-danger shadow-sm ms-2">Agregar nueva pregunta</button>
                    </div>
                </Fragment>
            }
        </div>
    )
}
