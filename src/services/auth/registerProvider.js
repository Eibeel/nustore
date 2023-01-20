import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '../../firebase/config';


export const registerUser = async ({ email, password }) => {

    try {

        const { user: { uid, displayName } } = await createUserWithEmailAndPassword(Auth, email, password);

        return {
            ok: true,
            uid,
            displayName
        }

    } catch (error) {

        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
            return {
                ok: false,
                errorMessage: 'El correo electrónico ya está en uso.'
            }
        }

    }
}
