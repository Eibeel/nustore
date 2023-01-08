import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { NustoreRoutes } from "../nustore/routes/NustoreRoutes"


export const AppRouter = () => {
    return (
        <Routes>
            
            <Route path="/*" element={<NustoreRoutes />}/>
            <Route path="/auth/*" element={<AuthRoutes />}/>

        </Routes>
    )
}
