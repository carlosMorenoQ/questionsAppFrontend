import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteFavorite, fetchFavorites, fetchQuestions } from '../actions/questionAction';

export const Favorites = () => {

    const dispatch = useDispatch();
    const id = useSelector(store => store.login.uid);
    const favorites = useSelector(store => store.question.favorites);
    const questions = useSelector(store => store.question.questions);
    const [fav, setFav] = useState([]);
    const navigate = useNavigate();
    const path = useSelector(store => store.question.redirect);

    useEffect(() => {
        if (path) {
            navigate(path)
        }
    }, [path, navigate])

    useEffect(() => {
        dispatch(fetchQuestions())
        dispatch(fetchFavorites(id))
    }, [dispatch, id])

    useEffect(() => {
        setFav(questions?.filter(q => favorites?.includes(q.id)))
    }, [questions, favorites])

    const handleGoToQuestion = (id) => {
        navigate(`/question/${id}`)
    }

    const handleGoQuestions = () => {
        navigate(`/questions`)
    }

    const handleDeleteFavorite = (qId) => {
        dispatch(deleteFavorite({
            userId: id,
            questionId: qId
        }))
    }

    return (
        <div className="container mt-2 w-50 mx-auto">
            <h1 className="d-flex justify-content-center text-center my-5">
                Favorites
            </h1>
            {fav.length > 0 ?
                <ul className="list-group">
                    {fav.map(data =>
                        <li key={data?.id}
                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                        >
                            <h6
                                onClick={() => handleGoToQuestion(data?.id)}
                                style={{ cursor: 'pointer' }}
                            >
                                {data?.question}
                            </h6>

                            <button onClick={() => handleDeleteFavorite(data?.id)} className="badge bg-danger rounded-pill">Delete</button>
                        </li>
                    )
                    }
                </ul>
                :
                <Fragment>
                    <div className='d-flex justify-content-center mt-3'>
                        <h6>- You have no favorite questions -</h6>
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                        <button onClick={handleGoQuestions} className="btn btn-danger shadow-sm ms-2">Go to Questions</button>
                    </div>
                </Fragment>
            }
        </div>
    )
}
