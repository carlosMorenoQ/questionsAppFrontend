import { register } from "../types/registerType";

export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case register.registered:

            return {
                uid: action.payload.name,
                correo: action.payload.password,
                displayName: action.payload.email,

            }

        default:
            return state;
    }
}