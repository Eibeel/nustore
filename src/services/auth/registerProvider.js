import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Auth } from '../../firebase/config';


export const registerUser = async ({ email, password, displayName }) => {

    try {

        const { user: { uid } } = await createUserWithEmailAndPassword(Auth, email, password);

        await updateProfile(Auth.currentUser, { displayName })

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
