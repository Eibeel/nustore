import { Route, Routes, useLocation } from "react-router-dom"
import { LoginPage, RegisterPage } from "../auth/pages"
import { ArticlePage, HomePage, SelectedCategoryPage } from "../nustore/pages"


export const AppRouter = () => {

    const { pathname } = useLocation()

    const lastPath = pathname;
    localStorage.setItem("lastPath", lastPath)

    return (
        <Routes>

            <Route path="/*" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/c/:id" element={<SelectedCategoryPage />} />
            <Route path="/c/:id/p/:product_title" element={<ArticlePage />} />

            {/* validar */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

        </Routes>
    )
}
