import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchQuestion, vote } from '../actions/questionAction';
import { Reply } from '../components/Reply';

export const Question = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const question = useSelector(store => store.question.question);
    const uId = useSelector(store => store.login.uid);
    const [reply, setReply] = useState(false);

    useEffect(() => {
        dispatch(fetchQuestion(id));
    }, [id, dispatch])

    const handleVote = (aId) => {
        dispatch(vote({
            idQuestion: id,
            idVoter: uId,
            idAnswer: aId
        }))
    }

    return (

        <div className="container mt-5 w-50 mx-auto">
            <div className="card">
                <h5 className="card-header">{question.email}</h5>
                <div className="card-body">
                    <h5 className="card-title">{question.question}</h5>
                    {uId &&
                        <div className='d-flex justify-content-end mt-3'>
                            <button onClick={() => setReply(true)} className="btn btn-outline-danger btn-sm shadow-sm">Reply</button>
                        </div>
                    }
                </div>
            </div>
            {
                reply &&
                <Reply setReply={setReply} qId={id} />
            }
            {
                question?.answers?.length > 0 ?
                    <ul className="list-group mb-5">
                        {question?.answers?.sort((a, b) => b.cantidadVotos - a.cantidadVotos).map(data =>
                            <li key={data?.answerId}
                                className="list-group-item d-flex justify-content-between align-items-center mt-2"
                            >
                                {data?.answer}
                                <div className='d-flex'>
                                    {uId &&
                                    (question.answerVotes[uId] !== data?.answerId)&&
                                        <button onClick={() => handleVote(data?.answerId)} className="badge bg-danger rounded-pill me-2">Like</button>
                                    }
                                    <h6 className=''>votes: {data?.cantidadVotos}</h6>
                                </div>
                            </li>
                        )
                        }
                    </ul>
                    :
                    <h5 className='text-center mt-5'>"No one has given answers to this question, be the first{!uId && ', register now!'}"</h5>
            }
        </div>
    )
}
