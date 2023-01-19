import { loginUser, logout, registerUser } from '../../services/auth';

export const startLogin = ({ email, password }) => {

    return async (dispatch) => {

        const { ok, uid, name, errorMessage } = await loginUser({ email, password });

        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(loginUser({ uid, name }))

    }
}

export const startRegister = ({ email, password, displayName }) => {

    return async (dispatch) => {

        const { ok, uid, name, errorMessage } = await registerUser({ email, password, displayName })

        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(loginUser({ uid, email, password, name }))
    }

}

export const startLogout = () => {

    return async (dispatch) => {
        await logout();
        dispatch(logout());
    }

}