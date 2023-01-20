import { loginUser, logoutUser, registerUser } from '../../services/auth';
import { login, logout } from './authSlice';

export const startRegister = ({ email, password, displayName }) => {

    return async (dispatch) => {

        const { ok, uid, errorMessage } = await registerUser({ email, password, displayName })

        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, displayName, email, password }));
    }

}

export const startLogin = ({ email, password }) => {

    return async (dispatch) => {

        const { ok, uid, displayName, errorMessage } = await loginUser({ email, password });

        if (!ok) return dispatch(logout({ errorMessage }))

        dispatch(login({ uid, displayName }))

    }
}

export const startLogout = () => {

    return async (dispatch) => {
        await logoutUser();
        dispatch(logout());
    }

}
