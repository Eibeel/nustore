import { signInWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '../../firebase/config'

export const loginUser = ({email, password}) => {

    try {
        
        const { user: { displayName, uid } } = signInWithEmailAndPassword(Auth, email, password)

        return {
            ok: true,
            uid,
            name: displayName
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