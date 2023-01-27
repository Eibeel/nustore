import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { Auth } from "../../firebase/config"

const googleProvider = new GoogleAuthProvider();

export const signInGoogle = async () => {

    try {

        const { user: { displayName, uid, } } = await signInWithPopup(Auth, googleProvider);

        return {
            ok: true,
            displayName,
            uid
        }

    } catch (error) {

        if (error.message === 'Firebase: Error (auth/user-not-found).') {
            return {
                ok: false,
                errorMessage: 'Usuario no existente.'
            }

        }

    }

}
