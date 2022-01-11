import { LOADED_FAILURE, LOADED_SUCCESS, LOADING } from "../types/questionType"

const URL_BASE = 'https://question-app-carlos.herokuapp.com';

export function fetchQuestions() {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(
                `${URL_BASE}/getAll`
            )
            const data = await response.json()
            dispatch(success({ questions: data, redirect: null }))
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function fetchFavorites(userId) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(
                `${URL_BASE}/favorite/${userId}`
            )
            const data = await response.json()
            dispatch(success({ favorites: data.favoriteQuestionsId, redirect: null }))
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function fetchOwnerQuestions(userId) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${URL_BASE}/getOwnerAll/${userId}`)
            const data = await response.json()
            dispatch(success({ questions: data, redirect: null }))
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function fetchQuestion(id) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${URL_BASE}/get/${id}`)
            const data = await response.json()
            dispatch(success({ question: data, redirect: null }))
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function postQuestion(question) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${URL_BASE}/create`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(question)
                }
            )
            const id = await response.text()
            dispatch(success({ redirect: `/question/${id}` }));
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function vote(info) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${URL_BASE}/updatevote`,
                {
                    method: 'PUT',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(info)
                }
            )
            const data = await response.json()
            dispatch(success({ question: data, redirect: null }));
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function deleteQuestion(id) {
    return async dispatch => {
        dispatch(loading())
        try {
            await fetch(`${URL_BASE}/delete/${id}`,
                {
                    method: 'DELETE',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            dispatch(success({ redirect: `/list` }));
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function postAnswer(answer) {
    return async dispatch => {
        dispatch(loading())
        try {
            await fetch(`${URL_BASE}/add`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(answer)
                }
            )
            dispatch(fetchQuestion(answer.questionId))
            dispatch(success({ redirect: `/question/${answer.questionId}` }));
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function postFavorite(favorite) {
    return async dispatch => {
        dispatch(loading())
        try {
            await fetch(`${URL_BASE}/favorite/add`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(favorite)
                }
            )
            dispatch(success({ redirect: '/favorites' }));
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function deleteFavorite(favorite) {
    return async dispatch => {
        dispatch(loading())
        try {
            await fetch(`${URL_BASE}/favorite/remove`,
                {
                    method: 'PUT',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(favorite)
                }
            )
            dispatch(success({ redirect: '/questions' }));
        } catch (error) {
            dispatch(failure())
        }
    }
}

export const loading = () => ({ type: LOADING })

export const failure = () => ({ type: LOADED_FAILURE })

export const success = payload => ({
    type: LOADED_SUCCESS,
    payload
});