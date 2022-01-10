import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { register } from "../types/registerType";
import { loginSincrono } from "./authAction";

export const registroEmailPasswordNombre = (name, email, password) => {

    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,
            email,
            password
        ).then(async ({ user }) => {

            await updateProfile(auth.currentUser,{
               displayName: name,
            })
            // Swal.fire({
            //     icon: 'success',
            //     title: 'Usuario Registrado con exito',
            //     showConfirmButton: false,
            //     timer: 2000
            //   })

            dispatch(registerSincrono(user.uid, user.displayName, user.email))
            
        }).catch(error => {
            console.log(error)
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Datos Incorrectos',
            //     text: error,
            //     showConfirmButton: false,
            //     timer: 2000
            //   })
        })

    }
}


export const registerSincrono = (name, email, password) => {
    return {
        type: register.registered,
        payload: {
            name,
            password,
            email,
        }
    }
}

export const editName = (uid, name, foto, correo, provider) => {

    return (dispatch) => {
        const auth = getAuth();

        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            dispatch(loginSincrono(uid, name, foto, correo, provider))
        }).catch((error) => {
            console.log(error)
        });
    }
}

