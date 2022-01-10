import { getAuth, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { googleAuth } from '../services/firebase'
import { auth } from '../types/authType';
import { success } from './questionAction';

const authentication = getAuth();

export const loginGoogle = () => {
    return (dispatch) => {
        signInWithPopup(
            authentication,
            googleAuth
        )
            .then(({ user }) => {
                console.log(user)
                console.log(user.providerData[0])
                const data = user.providerData[0];
                dispatch(loginSincrono(user.uid, data.displayName, data.photoURL, data.email, data.providerId))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const loginEmailPassword = (email, password) => {
    return (dispatch) => {
        signInWithEmailAndPassword(authentication,
            email,
            password
        ).then(({ user }) => {
            console.log(user)
            console.log(user.providerData[0])
            const data = user.providerData[0];
            dispatch(loginSincrono(user.uid, data.displayName, data.photoURL, data.email, data.providerId))
        }).catch(error => {
            console.log(error)
        })
    }
}

export const loginSincrono = (uid, displayName, foto, correo, provider) => {
    
    return {
        type: auth.login,
        payload: {
            uid,
            displayName,
            foto,
            correo,
            provider
        }
    }
}

export const logout = () => {

    return (dispatch) => {
        signOut(authentication)
            .then(user => {
                dispatch(logoutSincrono())
                dispatch(success({ favorites: [], redirect: null }))
                sessionStorage.clear();
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const logoutSincrono = () => {
    return {
        type: auth.logout
    }
}