import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { guardarSessionStorage, obtenerSessionStorage } from "../hooks/sessionStorage";
import { authReducer } from "../reducers/authReducer";
import { questionsReducer } from "../reducers/questionReducer";
import { registerReducer } from "../reducers/registerReducer";

const reducers = combineReducers({

    question: questionsReducer,
    login: authReducer,
    register: registerReducer

})

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const storageState = obtenerSessionStorage();

export const store = createStore(
    reducers,
    storageState,
    composeEnhancers(
        applyMiddleware(thunk))

)

store.subscribe(() => {
    guardarSessionStorage({
        login: store.getState().login
    })

})