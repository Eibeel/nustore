import { Auth } from "../../firebase/config"


export const logoutUser = async () => {
    return await Auth.signOut();
}