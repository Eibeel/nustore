import { loginUser, logout, registerUser } from '../../services/auth';
import { login } from './authSlice';

export const startLogin = ({ email, password }) => {

    return async (dispatch) => {

        const { uid, name } = await loginUser({ email, password });

        dispatch(login({ uid, name }))

    }
}

export const startRegister = ({ email, password, displayName }) => {

    return async (dispatch) => {

        const { uid, name } = await registerUser({ email, password, displayName })

        dispatch(login({ uid, email, password, name }))
    }

}

export const startLogout = () => {

    return async (dispatch) => {
        await logout();
        dispatch(logout());
    }

}