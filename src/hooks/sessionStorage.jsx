export const obtenerSessionStorage = () => {
    const logueadoStorage = sessionStorage.getItem('login');
    if (logueadoStorage === null) {
        return undefined
    }
    return JSON.parse(logueadoStorage)
}

export const guardarSessionStorage = (state) => {
    const logueadoState = JSON.stringify(state);
    sessionStorage.setItem('login', logueadoState)
}