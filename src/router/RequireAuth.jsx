import { Navigate } from "react-router-dom"


export const RequireAuth = ({isAuth, children}) => {

    if (!isAuth) {
        return <Navigate to={""} />
    }

    return children
}
