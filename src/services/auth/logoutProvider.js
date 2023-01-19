import { Auth } from "../../firebase/config"


export const logout = async () => {
    return await Auth.signOut();
}