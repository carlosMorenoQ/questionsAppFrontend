import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchFavorites, fetchQuestions, postFavorite } from '../actions/questionAction'

export const Questions = () => {

    const dispatch = useDispatch();
    const questions = useSelector(store => store.question.questions);
    const id = useSelector(store => store.login.uid);
    const favorites = useSelector(store => store.question.favorites);
    const path = useSelector(store => store.question.redirect);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchQuestions())
        dispatch(fetchFavorites(id))
    }, [dispatch, id])

    useEffect(() => {
        if (path) {
            navigate(path)
        }
    }, [path, navigate])

    const handleGoToQuestion = (id) => {
        navigate(`/question/${id}`)
    }

    const handleAddToFavorite = (qId) => {
        dispatch(postFavorite({
            userId: id,
            questionId: qId
        }))
    }

    return (
        <div className="container mt-2 w-50 mx-auto">
            <h1 className="d-flex justify-content-center text-center my-5">
                Questions
            </h1>
            <ul className="list-group">
                {questions.map(data =>
                    <li key={data?.id}
                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                        <h6
                            onClick={() => handleGoToQuestion(data?.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            {data?.question}
                        </h6>

                        {
                            !favorites.find(fav => fav === data?.id) &&
                            id &&
                            (id !== data?.userId) &&
                            <button onClick={() => handleAddToFavorite(data?.id)} className="badge bg-danger rounded-pill">Add Favorite</button>
                        }
                    </li>
                )
                }
            </ul>
        </div>
    )
}
