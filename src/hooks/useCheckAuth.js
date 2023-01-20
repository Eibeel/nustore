import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Auth } from "../firebase/config";
import { login, logout } from "../store/auth";


export const useCheckAuth = () => {

    const { status } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
      
        onAuthStateChanged(Auth, async (user) => {

            if (!user) return dispatch(logout());

            const { uid, name } = user;

            dispatch(login({uid, name}))
        })
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return status
}

