import { Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../auth/pages"
import { ArticlePage, HomePage, SelectedCategoryPage, ShoppingPage } from "../nustore/pages"
// import { AuthRoutes } from "../auth/routes/AuthRoutes"
// import { NustoreRoutes } from "../nustore/routes/NustoreRoutes"


export const AppRouter = () => {
    return (
        <Routes>

            <Route path="/*" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/categoria" element={<SelectedCategoryPage />} />
            <Route path="/articulo" element={<ArticlePage />} />
            <Route path="/carrito" element={<ShoppingPage />} />

            {/* validar */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

        </Routes>
    )
}
