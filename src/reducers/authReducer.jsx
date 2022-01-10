import { auth } from "../types/authType";

export const authReducer = (state = {}, action) => {
    
    switch (action.type) {
        case auth.login:
            return {
                uid: action.payload.uid,
                displayName: action.payload.displayName,
                foto: action.payload.foto,
                correo: action.payload.correo,
                provider: action.payload.provider
            }

        case auth.logout:
            return {}

        default:
            return state;
    }
}