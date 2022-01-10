import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAnswer } from '../actions/questionAction';
import { useForm } from '../hooks/useForm';

export const Reply = ({ setReply, qId }) => {

    const uId = useSelector(store => store.login.uid);
    const dispatch = useDispatch()

    const [values, handleInputChange, reset] = useForm({
        answer: '',
        userId: uId,
        questionId: qId
    })

    const { answer } = values;

    const handleSendAnswer = (e) => {
        e.preventDefault();
        dispatch(postAnswer(values))
        setReply(false);
        reset();
    }
    
    return (
        <div>
            <form  onSubmit={handleSendAnswer}>
                <div className="form-floating mt-3">
                    <textarea
                        className="form-control shadow-sm"
                        id="floatingTextarea2"
                        name="answer"
                        value={answer}
                        onChange={handleInputChange}
                    ></textarea>
                    <label htmlFor="floatingTextarea2">New Answer</label>
                </div>

                <div className="d-flex justify-content-center my-3">
                    <button type="submit" className="btn btn-danger shadow-sm me-2">Send</button>
                    <button onClick={()=>setReply(false)} className="btn btn-outline-danger shadow-sm ">Cancel</button>
                </div>
            </form>
        </div>
    )
}
